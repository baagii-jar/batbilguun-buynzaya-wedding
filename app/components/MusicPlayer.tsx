"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  autoPlayTriggered?: boolean;
}

export function MusicPlayer({ autoPlayTriggered = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isSynthPlayingRef = useRef(false);

  // Synthesize soft romantic ambient chords using Web Audio API if no MP3 file plays
  const playSynthesizedMelody = () => {
    try {
      if (isSynthPlayingRef.current) return;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const notes = [261.63, 329.63, 392.0, 523.25, 440.0, 349.23]; // C E G C A F
      let index = 0;

      const playNextNote = () => {
        if (!isSynthPlayingRef.current || ctx.state === "closed") return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(notes[index % notes.length], ctx.currentTime);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 2.6);

        index++;
        setTimeout(playNextNote, 2200);
      };

      isSynthPlayingRef.current = true;
      playNextNote();
    } catch {
      // Audio synth unsupported fallback
    }
  };

  const stopSynthesizedMelody = () => {
    isSynthPlayingRef.current = false;
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.close().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthesizedMelody();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If MP3 file missing or blocked, use ambient Web Audio melody
            playSynthesizedMelody();
            setIsPlaying(true);
          });
      } else {
        playSynthesizedMelody();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (autoPlayTriggered && !isPlaying) {
      togglePlay();
    }
  }, [autoPlayTriggered]);

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      {/* Floating Music Button */}
      <button
        type="button"
        onClick={togglePlay}
        className={`fixed top-4 right-4 z-40 p-3 rounded-full shadow-lg border transition-all duration-300 flex items-center justify-center gap-2 ${
          isPlaying
            ? "bg-[#C5A059] text-white border-[#C5A059] gold-border-glow scale-105"
            : "bg-[#FFFFFF]/90 text-[#786F66] border-[#E8DFD5] hover:text-[#2C2825]"
        }`}
        aria-label="Хөгжим асаах / унтраах"
      >
        <Music className={`w-4 h-4 ${isPlaying ? "animate-spin-slow" : ""}`} />
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-white animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4" />
        )}
      </button>
    </>
  );
}
