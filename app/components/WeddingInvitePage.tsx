"use client";

import { useState } from "react";
import { DesktopWrapper } from "./DesktopWrapper";
import { FallingPetals } from "./FallingPetals";
import { OpeningGate } from "./OpeningGate";
import { MusicPlayer } from "./MusicPlayer";
import { WeddingCover } from "./WeddingCover";
import { CountdownTimer } from "./CountdownTimer";
import { InvitationText } from "./InvitationText";
import { FancyCalendar } from "./FancyCalendar";
import { VenueLocation } from "./VenueLocation";
import { HonorSection } from "./HonorSection";
import { PhotoGallery } from "./PhotoGallery";
import { RsvpForm } from "./RsvpForm";
import { FooterSection } from "./FooterSection";
import { InvitationSide } from "./SideSwitcher";

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

      <WeddingCover activeSide={side} />
      <CountdownTimer />
      <InvitationText activeSide={side} />
      <FancyCalendar />
      <VenueLocation />
      <HonorSection activeSide={side} />
      <PhotoGallery />
      <RsvpForm />
      <FooterSection />
    </DesktopWrapper>
  );
}
