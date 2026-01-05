import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Owner, Sharma Electronics",
    content: "We were struggling to get customers from Google. After working with Royal Graphics for 8 months, we now rank on page 1 for 'electronics store Lucknow' and get 40+ calls a week from the website.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Director, Mehta Textiles Pvt Ltd",
    content: "They redesigned our entire catalog and product photography. Our wholesale inquiries doubled within 3 months. Very professional team that understood our traditional business.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Manager, Krishna Sweets & Bakery",
    content: "Started with just Facebook posts and now we have 28K followers. Festival season orders increased significantly. They know how to reach local customers.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 border-border hover:shadow-card transition-smooth bg-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} icon={Star} variant="accent" size="md" className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
