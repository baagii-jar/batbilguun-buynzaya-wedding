import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Ц.Батбилгүүн & Н.Буянзаяа | Хуримын урилга";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const runtime = "nodejs";

export default async function Image() {
  try {
    const coverImageData = readFileSync(
      join(process.cwd(), "public", "images", "cover.jpg")
    );
    const coverImageBase64 = `data:image/jpeg;base64,${coverImageData.toString(
      "base64"
    )}`;

    // Cormorant Garamond for latin/small text (УРИЛГА, date, etc.)
    const cormorantRegularData = readFileSync(
      join(process.cwd(), "node_modules", "@fontsource", "cormorant-garamond", "files", "cormorant-garamond-cyrillic-400-normal.woff")
    );
    const cormorantItalicData = readFileSync(
      join(process.cwd(), "node_modules", "@fontsource", "cormorant-garamond", "files", "cormorant-garamond-cyrillic-400-italic.woff")
    );

    // Noto Serif as SEPARATE family — supports all Mongolian glyphs (ү, ө, etc.)
    const notoSerifRegularData = readFileSync(
      join(process.cwd(), "node_modules", "@fontsource", "noto-serif", "files", "noto-serif-cyrillic-400-normal.woff")
    );
    const notoSerifRegularExtData = readFileSync(
      join(process.cwd(), "node_modules", "@fontsource", "noto-serif", "files", "noto-serif-cyrillic-ext-400-normal.woff")
    );
    const notoSerifItalicData = readFileSync(
      join(process.cwd(), "node_modules", "@fontsource", "noto-serif", "files", "noto-serif-cyrillic-400-italic.woff")
    );
    const notoSerifItalicExtData = readFileSync(
      join(process.cwd(), "node_modules", "@fontsource", "noto-serif", "files", "noto-serif-cyrillic-ext-400-italic.woff")
    );

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "#FDFBF8",
            fontFamily: '"Cormorant Garamond"',
          }}
        >
          {/* Left Side: Photo */}
          <div
            style={{
              display: "flex",
              width: "50%",
              height: "100%",
              backgroundImage: `url(${coverImageBase64})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Right Side: Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              height: "100%",
              padding: "40px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                color: "#C5A059",
                letterSpacing: "8px",
                textTransform: "uppercase",
                marginBottom: "40px",
                fontFamily: '"Cormorant Garamond"',
              }}
            >
              Урилга
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "60px",
              }}
            >
              {/* Use Noto Serif for names — it has all Mongolian glyphs */}
              <div
                style={{
                  fontSize: "64px",
                  color: "#2C2825",
                  fontStyle: "italic",
                  lineHeight: 1.2,
                  fontFamily: '"Noto Serif"',
                }}
              >
                Батбилгүүн
              </div>
              <div
                style={{
                  fontSize: "40px",
                  color: "#C5A059",
                  margin: "12px 0",
                  fontFamily: '"Cormorant Garamond"',
                }}
              >
                &amp;
              </div>
              <div
                style={{
                  fontSize: "64px",
                  color: "#2C2825",
                  fontStyle: "italic",
                  lineHeight: 1.2,
                  fontFamily: '"Noto Serif"',
                }}
              >
                Буянзаяа
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  color: "#2C2825",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  fontFamily: '"Cormorant Garamond"',
                }}
              >
                Хуримын ёслол
              </div>
              <div
                style={{
                  fontSize: "28px",
                  color: "#C5A059",
                  marginBottom: "16px",
                  fontFamily: '"Cormorant Garamond"',
                }}
              >
                2026.10.04
              </div>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Cormorant Garamond",
            data: cormorantRegularData,
            style: "normal",
            weight: 400,
          },
          {
            name: "Cormorant Garamond",
            data: cormorantItalicData,
            style: "italic",
            weight: 400,
          },
          {
            name: "Noto Serif",
            data: notoSerifRegularData,
            style: "normal",
            weight: 400,
          },
          {
            name: "Noto Serif",
            data: notoSerifRegularExtData,
            style: "normal",
            weight: 400,
          },
          {
            name: "Noto Serif",
            data: notoSerifItalicData,
            style: "italic",
            weight: 400,
          },
          {
            name: "Noto Serif",
            data: notoSerifItalicExtData,
            style: "italic",
            weight: 400,
          },
        ],
      }
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
