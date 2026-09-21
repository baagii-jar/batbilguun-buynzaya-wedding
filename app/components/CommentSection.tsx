"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Camera, Heart } from "lucide-react";
import { WreathCircle } from "./FloralDecor";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";
import imageCompression from "browser-image-compression";

interface Comment {
  id: string;
  name: string;
  message: string;
  image_url?: string;
  created_at: string;
}

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });

      if (error && Object.keys(error).length > 0) {
        console.error("Error fetching comments:", error);
      } else if (data) {
        setComments(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      let image_url = null;

      if (file) {
        // Compress the image to save storage space
        const options = {
          maxSizeMB: 0.5, // 500KB max
          maxWidthOrHeight: 800,
          useWebWorker: true,
        };

        const compressedFile = await imageCompression(file, options);

        const fileExt = compressedFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("guest-photos")
          .upload(filePath, compressedFile);

        if (uploadError) {
          console.error("Upload error:", uploadError);
        } else {
          const { data } = supabase.storage
            .from("guest-photos")
            .getPublicUrl(filePath);
          image_url = data.publicUrl;
        }
      }

      const { error } = await supabase.from("comments").insert([
        { name, message, image_url },
      ]);

      if (error) {
        console.error("Insert error:", error);
      } else {
        setIsModalOpen(false);
        setName("");
        setMessage("");
        setFile(null);
        fetchComments();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollLeftBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRightBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full px-6 py-12 bg-[#FAF8F5] flex flex-col items-center overflow-hidden">
      {/* Botanical Background Details */}
      <WreathCircle className="absolute -bottom-10 -right-10 w-48 h-48 opacity-20" />

      {/* Slider Container */}
      <div className="relative w-full max-w-sm mb-6">
        {comments.length > 0 ? (
          <>
            <button
              onClick={scrollLeftBtn}
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-sm text-[#8C6D37]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div
              ref={scrollRef}
              className="flex items-stretch overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-none py-6 px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex-shrink-0 w-[85%] sm:w-[280px] h-auto snap-center bg-[#FDFBF8] border border-[#E8DFD5] rounded-xl p-6 shadow-sm flex flex-col items-center text-center relative"
                >
                  <p className="font-wedding-serif text-sm text-[#4A4237] leading-relaxed mb-4 italic">
                    {comment.message}
                  </p>
                  {comment.image_url && (
                    <div className="relative w-full h-48 mb-4 rounded overflow-hidden bg-[#E8DFD5]/60 animate-pulse flex items-center justify-center">
                      <Image
                        src={comment.image_url}
                        alt="Guest photo"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-contain opacity-0 transition-opacity duration-500"
                        onLoad={(e) => {
                          e.currentTarget.classList.remove("opacity-0");
                          e.currentTarget.parentElement?.classList.remove("animate-pulse", "bg-[#E8DFD5]/60");
                        }}
                      />
                    </div>
                  )}
                  <p className="text-[10px] uppercase tracking-widest text-[#8C6D37] mt-auto font-semibold">
                    — {comment.name}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={scrollRightBtn}
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-sm text-[#8C6D37]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        ) : (
          <div className="text-center p-6 text-sm font-wedding-serif text-[#8C6D37] italic">
            Хамгийн анхны сэтгэлийн үгийг үлдээгээрэй...
          </div>
        )}
      </div>

      {/* Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 bg-[#2C2825] text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-black transition-colors"
      >
        <Heart className="w-4 h-4 fill-current" />
        СЭТГЭЛИЙН ҮГ ҮЛДЭЭХ
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="bg-[#FDFBF8] w-full max-w-sm rounded-xl relative shadow-lg my-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#8C6D37] hover:text-[#2C2825]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 flex flex-col items-center text-center pt-8">
                <WreathCircle className="w-16 h-16 mb-2 opacity-80" />
                <h3 className="font-wedding-serif text-2xl text-[#8C6D37] mb-1">
                  Сэтгэлийн үг үлдээх
                </h3>
                <p className="text-[10px] text-[#786F66] italic mb-6">
                  Сэтгэлийн үгээ, хүсвэл зурагтайгаа үлдээгээрэй <Heart className="inline w-3 h-3" />
                </p>

                <form onSubmit={handleSubmit} className="w-full text-left space-y-4">
                  <div>
                    <label className="block text-[10px] font-semibold tracking-wider text-[#8C6D37] uppercase mb-1.5">
                      НЭР
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 bg-transparent border border-[#D9CEBE] text-sm focus:outline-none focus:border-[#8C6D37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-wider text-[#8C6D37] uppercase mb-1.5">
                      СЭТГЭЛИЙН ҮГ
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 bg-transparent border border-[#D9CEBE] text-sm focus:outline-none focus:border-[#8C6D37] resize-none"
                    />
                  </div>

                  <div className="border border-dashed border-[#C5A059] p-4 text-center cursor-pointer relative hover:bg-[#FAF7F2] transition-colors rounded">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center gap-2 pointer-events-none text-[#8C6D37]">
                      <Camera className="w-6 h-6" />
                      <span className="text-xs font-semibold">Зураг нэмэх</span>
                      <span className="text-[10px] text-[#786F66]">
                        {file ? file.name : "Өөрийн эсвэл хамтдаа авхуулсан зураг"}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1F1C18] text-white py-3.5 mt-2 text-xs font-bold uppercase tracking-[0.3em] hover:bg-black transition-colors"
                  >
                    {isSubmitting ? "ИЛГЭЭЖ БАЙНА..." : "И Л Г Э Э Х"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
