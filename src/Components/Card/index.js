import { LinkPreview } from "@dhaiwat10/react-link-preview";

export default function Card({ link }) {
  return (
    <div className="pb-10 hover:scale-95">
      <LinkPreview
        url={link}
        width="250px"
        height="350px"
        fallbackImageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80"
        imageHeight="30%"
        maxHeight="50%"
        descriptionLength="85"
        openInNewTab="true"
        margin="5px"
      />
    </div>
  );
}
