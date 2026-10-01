import type { Metadata } from "next";
import { Section, Heading, Eyebrow, Lead } from "@/components/Section";
export const metadata: Metadata = {
  alternates: { canonical: "/privacy" }, title: "Privacy notice", description: "How Seacoast Home Partners handles website inquiries." };
export default function PrivacyPage() {
 return <main id="main"><Section><Eyebrow>Privacy · September 30, 2026</Eyebrow><h1 className="mt-3 font-serif text-4xl font-semibold">Website inquiry privacy notice</h1>
 <Lead>Granite Coast Ventures, LLC, doing business as Seacoast Home Partners, uses the information you provide to respond to your property inquiry.</Lead>
 <div className="mt-10 max-w-3xl space-y-8 text-muted leading-relaxed">
 <div><Heading>Information you provide</Heading><p className="mt-4">The inquiry form collects your name, phone number, property town, optional email, optional service interest, optional property notes, and permission to contact you. A submission also includes its time and a reference identifier. Please do not submit access codes, financial information, or medical details.</p></div>
 <div><Heading>How your inquiry is handled</Heading><p className="mt-4">Your information is used to return your inquiry and discuss the property and potential services. It may be processed by service providers used to operate the website and receive inquiries. Submitting this form does not enroll you in marketing messages or purchase a service.</p></div>
 <div><Heading>Requests about your information</Heading><p className="mt-4">When we contact you, you can ask us to correct or delete your inquiry information, or stop contacting you. Use the contact form to request a callback about privacy. Any information required to be kept for legal or contractual reasons may need to be retained.</p></div>
 <div><Heading>Website operation</Heading><p className="mt-4">This website does not use advertising trackers or a customer account system. The hosting service may process technical information such as IP addresses and request details to operate and protect the website. Website inquiry information is not a property service record.</p></div>
 </div></Section></main>;
}
