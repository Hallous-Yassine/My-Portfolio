import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactData {
  contactInfo: {
    email: string;
    phone: string;
    location: string;
  };
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
  formLabels: {
    name: string;
    email: string;
    message: string;
    submitButton: string;
  };
  formPlaceholder: string;
  codePreview: {
    title: string;
    defaultName: string;
  };
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetch('/data/contact.json')
      .then(response => response.json())
      .then(data => {
        setContactData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading contact data:', error);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center">
        <div className="text-muted-foreground">Loading contact information...</div>
      </div>
    );
  }

  if (!contactData) {
    return (
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center">
        <div className="text-red-500">Error loading contact information</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      {/* Sidebar */}
      <aside className="w-80 border-r border-border p-4 space-y-6">
        <div>
          <h3 className="text-sm font-mono text-foreground mb-3">contacts</h3>
          <div className="space-y-2">
            <a
              href={`mailto:${contactData.contactInfo.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-xs">{contactData.contactInfo.email}</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-xs">{contactData.contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-xs">{contactData.contactInfo.location}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-mono text-foreground mb-3">find-me-also-in</h3>
          <div className="space-y-2">
            {contactData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name === "YouTube" ? (
                  <div dangerouslySetInnerHTML={{ __html: link.icon }} />
                ) : (
                  <span className="text-xs">{link.icon}</span>
                )}
                <span className="text-xs">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Form Section */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                  {contactData.formLabels.name}
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-mono"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                  {contactData.formLabels.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="font-mono"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                  {contactData.formLabels.message}
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="font-mono min-h-[150px] resize-none"
                  placeholder={contactData.formPlaceholder}
                  required
                />
              </div>

              <Button type="submit" className="font-mono">
                {contactData.formLabels.submitButton}
              </Button>
            </form>
          </div>
        </div>

        {/* Code Preview Section */}
        <div className="w-96 border-l border-border p-6 bg-accent/50">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
            <span className="text-xs font-mono text-muted-foreground">{contactData.codePreview.title}</span>
            <button className="ml-auto text-muted-foreground hover:text-foreground">–</button>
          </div>
          
          <div className="font-mono text-xs space-y-1">
            <pre className="text-code-purple">const <span className="text-code-blue">button</span> = <span className="text-foreground">document</span>.<span className="text-code-yellow">querySelector</span>(<span className="text-code-orange">'#sendBtn'</span>);</pre>
            <pre></pre>
            <pre className="text-code-purple">const <span className="text-code-blue">message</span> = {"{"}</pre>
            <pre className="text-code-blue">name: <span className="text-code-orange">"{formData.name || contactData.codePreview.defaultName}"</span>,</pre>
            <pre className="ml-4 text-code-blue">email: <span className="text-code-orange">"{formData.email || ''}"</span>,</pre>
            <pre className="ml-4 text-code-blue">message: <span className="text-code-orange">"{formData.message || ''}"</span></pre>
            <pre>{"}"}</pre>
            <pre></pre>
            <pre className="text-foreground">button.<span className="text-code-yellow">addEventListener</span>(<span className="text-code-orange">'click'</span>, () ={">"} {"{"}</pre>
            <pre className="ml-4 text-foreground">form.<span className="text-code-yellow">send</span>(message);</pre>
            <pre>{"}"})</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
