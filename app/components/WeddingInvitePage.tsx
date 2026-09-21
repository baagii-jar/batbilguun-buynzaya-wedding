"use client";

import { useState } from "react";
import { DesktopWrapper } from "./DesktopWrapper";
import { FallingPetals } from "./FallingPetals";
import { OpeningGate } from "./OpeningGate";
import { MusicPlayer } from "./MusicPlayer";
import { WeddingCover } from "./WeddingCover";
import { FancyCalendar } from "./FancyCalendar";
import { InvitationText } from "./InvitationText";
import { VenueLocation } from "./VenueLocation";
import { HonorSection } from "./HonorSection";
import { PhotoGallery } from "./PhotoGallery";
import { SinglePhoto } from "./SinglePhoto";
import { RsvpForm } from "./RsvpForm";
import { CommentSection } from "./CommentSection";
import { FooterSection } from "./FooterSection";
import { InvitationSide } from "./SideSwitcher";
import { FadeInOnScroll } from "./FadeInOnScroll";

interface WeddingInvitePageProps {
  side?: InvitationSide;
}

export function WeddingInvitePage({ side = "husband" }: WeddingInvitePageProps) {
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  const handleOpenGate = () => {
    setAutoPlayMusic(true);
  };

  return (
    <DesktopWrapper>
      {/* Opening Gate Screen Overlay */}
      <OpeningGate onOpen={handleOpenGate} />

      {/* Floating Music Player Toggle & Ambient Audio */}
      <MusicPlayer autoPlayTriggered={autoPlayMusic} />

      {/* Floating Leaves & Flower Petals Animation */}
      <FallingPetals />

      {/* Hero Cover & Countdown Timer */}
      <WeddingCover activeSide={side} />

      {/* Invitation Letter Box with Fade-in Animation */}
      <FadeInOnScroll>
        <InvitationText activeSide={side} />
      </FadeInOnScroll>

      {/* Interstitial Photo 1 */}
      <FadeInOnScroll>
        <SinglePhoto src="/images/aAiJG4GJ.jpg" alt="Хуримын зураг 1" />
      </FadeInOnScroll>

      {/* Calendar Section with Fade-in Animation */}
      <FadeInOnScroll>
        <FancyCalendar />
      </FadeInOnScroll>

      {/* Interstitial Photo 2 */}
      <FadeInOnScroll>
        <SinglePhoto src="/images/QpUbVMfa.jpg" alt="Хуримын зураг 2" />
      </FadeInOnScroll>

      {/* Venue & Location Section with Fade-in Animation */}
      <FadeInOnScroll>
        <VenueLocation activeSide={side} />
      </FadeInOnScroll>

      {/* Honor Section with Fade-in Animation */}
      <FadeInOnScroll>
        <HonorSection activeSide={side} />
      </FadeInOnScroll>

      {/* Interstitial Photo 3 */}
      <FadeInOnScroll>
        <SinglePhoto src="/images/u-5-GFJs.jpg" alt="Хуримын зураг 3" />
      </FadeInOnScroll>

      {/* Photo Gallery with Fade-in Animation */}
      <FadeInOnScroll>
        <PhotoGallery />
      </FadeInOnScroll>

      {/* RSVP Form with Fade-in Animation */}
      <FadeInOnScroll>
        <RsvpForm />
      </FadeInOnScroll>

      {/* Comment Section with Fade-in Animation */}
      <FadeInOnScroll>
        <CommentSection />
      </FadeInOnScroll>

      {/* Footer Section */}
      <FooterSection />
    </DesktopWrapper>
  );
}
