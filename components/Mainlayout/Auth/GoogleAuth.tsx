import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";

const GoogleAuthProvider = ({ children }: { children: ReactNode }) => {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!googleClientId) {
    throw new Error("Environment variable NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set");
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
