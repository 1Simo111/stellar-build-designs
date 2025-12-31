import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Lot Haddiou N° 501\nSidi Maarouf\nCasablanca, Maroc",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "05 40 13 16 17 – 05 22 78 05 24\n06 61 70 68 67",
    },
    {
      icon: Mail,
      title: "Adresse e-mail",
      content: "contact@tgcbat.com",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven: 8h00 - 18h00\nSam: 9h00 - 12h00",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Contactez-Nous
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Démarrez Votre Projet{" "}
            <span className="text-secondary">Aujourd'hui</span>
          </h2>
          <p className="text-muted-foreground">
            Une question ? Un projet en tête ? N'hésitez pas à nous contacter. 
            Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-background rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-background p-8 rounded-xl shadow-md">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nom Complet *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@tgcbat.com"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Téléphone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 61 70 68 67"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Sujet *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Demande de devis"
                    required
                    className="h-12"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet..."
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button type="submit" size="xl" className="w-full md:w-auto">
                Envoyer le Message
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
