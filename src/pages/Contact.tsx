import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      {/* Sidebar */}
      <aside className="w-80 border-r border-border p-4 space-y-6">
        <div>
          <h3 className="text-sm font-mono text-foreground mb-3">contacts</h3>
          <div className="space-y-2">
            <a
              href="mailto:yassine_hallous@ieee.org"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-xs">yassine_hallous@ieee.org</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-xs">+216-98477182</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-xs">Tunis, Sousse - Tunisia</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-mono text-foreground mb-3">find-me-also-in</h3>
          <div className="space-y-2">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-xs">YouTube</span>
            </a>
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs">📝 dev.to</span>
            </a>
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
                  _name:
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
                  _email:
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
                  _message:
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="font-mono min-h-[150px] resize-none"
                  placeholder="your message here ..."
                  required
                />
              </div>

              <Button type="submit" className="font-mono">
                submit-message
              </Button>
            </form>
          </div>
        </div>

        {/* Code Preview Section */}
        <div className="w-96 border-l border-border p-6 bg-accent/50">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
            <span className="text-xs font-mono text-muted-foreground">code-preview</span>
            <button className="ml-auto text-muted-foreground hover:text-foreground">–</button>
          </div>
          
          <div className="font-mono text-xs space-y-1">
            <pre className="text-code-purple">const <span className="text-code-blue">button</span> = <span className="text-foreground">document</span>.<span className="text-code-yellow">querySelector</span>(<span className="text-code-orange">'#sendBtn'</span>);</pre>
            <pre></pre>
            <pre className="text-code-purple">const <span className="text-code-blue">message</span> = {"{"}</pre>
            <pre className="ml-4 text-code-blue">name: <span className="text-code-orange">"{formData.name || 'Jonathan Davis'}"</span>,</pre>
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
