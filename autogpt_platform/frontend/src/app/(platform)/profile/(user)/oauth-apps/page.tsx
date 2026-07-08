import { Metadata } from "next/types";
import { Text } from "@/components/atoms/Text/Text";
import { OAuthAppsSection } from "./components/OAuthAppsSection";

export const metadata: Metadata = { title: "OAuth Apps - Indra Ai" };

const OAuthAppsPage = () => {
  return (
    <div className="container space-y-6 py-10">
      <div className="flex flex-col gap-2">
        <Text variant="h3">OAuth Applications</Text>
        <Text variant="large">
          Manage your OAuth applications that use the Indra Ai API
        </Text>
      </div>
      <OAuthAppsSection />
    </div>
  );
};

export default OAuthAppsPage;
