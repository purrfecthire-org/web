import MainContent from "../components/MainContent/MainContent";
import Carrousel from "../components/Carrousel/Carrousel";
import RolCards from "../components/RolCards/RolCards";
import Comments from "../components/Comments/Comments";

import { COMMENTS_CLIENTS_CANDIDATES_DATA } from "../components/Comments/Comments.config";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import WorldSection from "../components/WorldSection/WorldSection";
import CommentJoset from "../components/CommentJoset/CommentJoset";
import OurPerks from "../components/OurPerks/OurPerks";
import OfferAcceleration from "../components/OfferAcceleration/OfferAcceleration";
import Why2026 from "../components/Why2026/Why2026";

export default function Home() {
  return (
    <>
      <MainContent />
      <Carrousel />
      <AboutUsSection />
      <WorldSection />
      <RolCards />
      <OfferAcceleration />
      <CommentJoset />
      <Comments
        comments={COMMENTS_CLIENTS_CANDIDATES_DATA}
        title="Clients and Candidates Love Us"
      />
      <OurPerks />
      <Why2026 />
    </>
  );
}
