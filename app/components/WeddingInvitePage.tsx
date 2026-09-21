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
import { RsvpForm } from "./RsvpForm";
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

      {/* Calendar Section with Fade-in Animation */}
      <FadeInOnScroll>
        <FancyCalendar />
      </FadeInOnScroll>

      {/* Venue & Location Section with Fade-in Animation */}
      <FadeInOnScroll>
        <VenueLocation />
      </FadeInOnScroll>

      {/* Honor Section with Fade-in Animation */}
      <FadeInOnScroll>
        <HonorSection activeSide={side} />
      </FadeInOnScroll>

      {/* Photo Gallery with Fade-in Animation */}
      <FadeInOnScroll>
        <PhotoGallery />
      </FadeInOnScroll>

      {/* RSVP Form with Fade-in Animation */}
      <FadeInOnScroll>
        <RsvpForm />
      </FadeInOnScroll>

      {/* Footer Section */}
      <FooterSection />
    </DesktopWrapper>
  );
}
