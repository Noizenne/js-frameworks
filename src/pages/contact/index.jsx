import ContactForm from "../../components/Contact"
import { useEffect } from "react";
export default function Contact() {

  useEffect(() => {
    document.title = "Dings | Contact";
  }, [])

    return (
      <div>
        <ContactForm />
        </div>
    )
  }