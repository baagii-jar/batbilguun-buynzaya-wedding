import { WeddingInvitePage } from "../components/WeddingInvitePage";
import { InvitationSide } from "../components/SideSwitcher";

interface DynamicPageProps {
  params: Promise<{
    side: string;
  }>;
}

export default async function SidePage({ params }: DynamicPageProps) {
  const resolvedParams = await params;
  const rawSide = resolvedParams.side?.toLowerCase() || "";

  const isWife = rawSide === "wife" || rawSide === "buynzaya";
  const side: InvitationSide = isWife ? "bride" : "husband";

  return <WeddingInvitePage side={side} />;
}
