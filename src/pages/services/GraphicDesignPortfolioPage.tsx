import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Palette, X } from "lucide-react";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

// Logo imports
import jahaziLogo from "@/assets/portfolio/logos/jahazi-solutions.png";
import hikersHavenLogo from "@/assets/portfolio/logos/hikers-haven.png";
import moraraLogo from "@/assets/portfolio/logos/morara-furniture.png";
import neoAfricaLogo from "@/assets/portfolio/logos/neo-africa.png";
import subyTechLogo from "@/assets/portfolio/logos/suby-tech.png";
import tekSavannahLogo from "@/assets/portfolio/logos/tek-savannah.png";
import waksDigitalLogo from "@/assets/portfolio/logos/waks-digital.png";
import achieMentalLogo from "@/assets/portfolio/logos/achie-mental-health.png";
import africaTdmLogo from "@/assets/portfolio/logos/africa-tdm.png";
import aimoTravelLogo from "@/assets/portfolio/logos/aimo-travel.jpg";
import apexCryptoAcademyLogo from "@/assets/portfolio/logos/apex-crypto-academy.png";
import apexCryptoShopLogo from "@/assets/portfolio/logos/apex-crypto-shop.png";
import apexPesaLogo from "@/assets/portfolio/logos/apex-pesa.png";
import apex21Logo from "@/assets/portfolio/logos/apex21.png";
import alkaumyTvLogo from "@/assets/portfolio/logos/alkaumy-tv.png";
import arianaMerchantsLogo from "@/assets/portfolio/logos/ariana-merchants.png";
import bayaSolutionsLogo from "@/assets/portfolio/logos/baya-solutions.png";
import beetfitStoresLogo from "@/assets/portfolio/logos/beetfit-stores.png";
import benafriqSafarisLogo from "@/assets/portfolio/logos/benafriq-safaris.jpg";
import bestvanaFoodsLogo from "@/assets/portfolio/logos/bestvana-foods.png";
import brawsieSecurityLogo from "@/assets/portfolio/logos/brawsie-security.png";
import dtechSolutionsLogo from "@/assets/portfolio/logos/dtech-solutions.png";
import ewLightupLogo from "@/assets/portfolio/logos/ew-lightup.png";
import farajaRealtorsLogo from "@/assets/portfolio/logos/faraja-realtors.png";

// Poster imports
import aimoNewYear2026 from "@/assets/portfolio/posters/aimo-new-year-2026.png";
import aimoVisaAbroad from "@/assets/portfolio/posters/aimo-visa-abroad.png";
import aimoRailaTribute from "@/assets/portfolio/posters/aimo-raila-tribute.png";
import aimoCanadaWorldcup from "@/assets/portfolio/posters/aimo-canada-worldcup.png";
import aimoCanadaVisa from "@/assets/portfolio/posters/aimo-canada-visa.png";
import aimoCanadaVisaProcessing from "@/assets/portfolio/posters/aimo-canada-visa-processing.png";
import aimoMerryChristmas from "@/assets/portfolio/posters/aimo-merry-christmas.png";
import aimoHolidayNotice from "@/assets/portfolio/posters/aimo-holiday-notice.png";
import poster22 from "@/assets/portfolio/posters/poster-22.png";
import poster24 from "@/assets/portfolio/posters/poster-24.png";
import poster25 from "@/assets/portfolio/posters/poster-25.png";
import poster28 from "@/assets/portfolio/posters/poster-28.png";
import poster33 from "@/assets/portfolio/posters/poster-33.png";
import poster34 from "@/assets/portfolio/posters/poster-34.png";
import poster35 from "@/assets/portfolio/posters/poster-35.png";
import poster36 from "@/assets/portfolio/posters/poster-36.png";
import poster42 from "@/assets/portfolio/posters/poster-42.png";
import poster43 from "@/assets/portfolio/posters/poster-43.png";

// Flyer imports
import genesisDevelopersFlyer from "@/assets/portfolio/flyers/genesis-developers-flyer.png";
import bayaSolutionsFlyer from "@/assets/portfolio/flyers/baya-solutions-flyer.png";
import leleyaCleaningFlyer from "@/assets/portfolio/flyers/leleya-cleaning-flyer.png";
import palazzoloFlyer1 from "@/assets/portfolio/flyers/palazzolo-flyer-1.png";
import palazzoloCoursesFlyer from "@/assets/portfolio/flyers/palazzolo-courses-flyer.png";
import palazzoloFlyer2 from "@/assets/portfolio/flyers/palazzolo-flyer-2.png";

// Letterhead imports
import familyBlissLetterhead from "@/assets/portfolio/letterheads/family-bliss.png";
import harvestYouthLetterhead from "@/assets/portfolio/letterheads/harvest-youth.png";
import metaforgeLetterhead from "@/assets/portfolio/letterheads/metaforge.png";
import milesBuildersLetterhead from "@/assets/portfolio/letterheads/miles-builders.png";
import mwegaMentalLetterhead from "@/assets/portfolio/letterheads/mwega-mental.png";
import nexovateLetterhead from "@/assets/portfolio/letterheads/nexovate.png";
import nurexIftinLetterhead from "@/assets/portfolio/letterheads/nurex-iftin.png";
import planetCareLetterhead from "@/assets/portfolio/letterheads/planet-care.png";
import sheltecLetterhead from "@/assets/portfolio/letterheads/sheltec.png";
import tekpathLetterhead from "@/assets/portfolio/letterheads/tekpath.png";
interface PortfolioItem {
  title: string;
  image: string;
}

interface PortfolioCategory {
  id: string;
  title: string;
  description: string;
  items: PortfolioItem[];
}

const GraphicDesignPortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const ITEMS_PER_PAGE = 6;
  const categories: PortfolioCategory[] = [
    {
      id: "logos",
      title: "2D Logos",
      description: "Brand identities that make lasting impressions",
      items: [
        { title: "Jahazi Solutions", image: jahaziLogo },
        { title: "Hikers Haven Community", image: hikersHavenLogo },
        { title: "Morara Home Furniture", image: moraraLogo },
        { title: "Neo Africa Safaris", image: neoAfricaLogo },
        { title: "Suby Tech", image: subyTechLogo },
        { title: "Tek Savannah Labs", image: tekSavannahLogo },
        { title: "Waks Digital Solutions", image: waksDigitalLogo },
        { title: "Achie Mental Health Foundation", image: achieMentalLogo },
        { title: "Africa Transformation Digital Media", image: africaTdmLogo },
        { title: "Aimo Travel Agency", image: aimoTravelLogo },
        { title: "Apex Crypto Academy", image: apexCryptoAcademyLogo },
        { title: "Apex Crypto Shop", image: apexCryptoShopLogo },
        { title: "Apex Pesa", image: apexPesaLogo },
        { title: "Apex21", image: apex21Logo },
        { title: "Alkaumy TV", image: alkaumyTvLogo },
        { title: "Ariana General Merchants Ltd", image: arianaMerchantsLogo },
        { title: "Baya Solutions Limited", image: bayaSolutionsLogo },
        { title: "Beetfit Stores", image: beetfitStoresLogo },
        { title: "Benafriq Safaris", image: benafriqSafarisLogo },
        { title: "Bestvana Authentic Foods", image: bestvanaFoodsLogo },
        { title: "Brawsie Security Group", image: brawsieSecurityLogo },
        { title: "DTech Solutions", image: dtechSolutionsLogo },
        { title: "Ew. LightUp Moments Broadcast", image: ewLightupLogo },
        { title: "Faraja Realtors", image: farajaRealtorsLogo }
      ]
    },
    {
      id: "posters",
      title: "Posters",
      description: "Eye-catching posters for events and promotions",
      items: [
        { title: "Aimo Travel - Happy New Year 2026", image: aimoNewYear2026 },
        { title: "Aimo Travel - Visa Abroad Dreams", image: aimoVisaAbroad },
        { title: "Aimo Travel - Hon. Raila Odinga Tribute", image: aimoRailaTribute },
        { title: "Aimo Travel - Canada World Cup", image: aimoCanadaWorldcup },
        { title: "Aimo Travel - Canada Visitor Visa", image: aimoCanadaVisa },
        { title: "Aimo Travel - Canada Visa Processing", image: aimoCanadaVisaProcessing },
        { title: "Aimo Travel - Merry Christmas", image: aimoMerryChristmas },
        { title: "Aimo Travel - Holiday Notice", image: aimoHolidayNotice },
        { title: "Promotional Poster Design", image: poster22 },
        { title: "Event Poster Design", image: poster24 },
        { title: "Marketing Poster Design", image: poster25 },
        { title: "Brand Poster Design", image: poster28 },
        { title: "Social Media Poster", image: poster33 },
        { title: "Campaign Poster Design", image: poster34 },
        { title: "Creative Poster Design", image: poster35 },
        { title: "Business Poster Design", image: poster36 },
        { title: "Apex Crypto Academy - Master Crypto Bundle", image: poster42 },
        { title: "Apex Crypto Academy - Bundle Details", image: poster43 }
      ]
    },
    {
      id: "flyers",
      title: "Flyers",
      description: "Promotional flyers that get noticed",
      items: [
        { title: "Genesis Developers - Secret Haven Ranch", image: genesisDevelopersFlyer },
        { title: "Baya Solutions - Cleaning Services", image: bayaSolutionsFlyer },
        { title: "Leleya Cleaning Services", image: leleyaCleaningFlyer },
        { title: "Palazzolo Technical Institute", image: palazzoloFlyer1 },
        { title: "Palazzolo - Our Courses", image: palazzoloCoursesFlyer },
        { title: "Palazzolo - Intake Ongoing", image: palazzoloFlyer2 }
      ]
    },
    {
      id: "letterheads",
      title: "Letterheads",
      description: "Professional stationery for your business",
      items: [
        { title: "Family Bliss Medical Centre Limited", image: familyBlissLetterhead },
        { title: "Harvest Youth Ministry", image: harvestYouthLetterhead },
        { title: "Metaforge Holdings Limited", image: metaforgeLetterhead },
        { title: "Miles Builders & Transporters Ltd", image: milesBuildersLetterhead },
        { title: "Mwega Mental Wellness & Psychotherapy", image: mwegaMentalLetterhead },
        { title: "Nexovate Technologies Ltd", image: nexovateLetterhead },
        { title: "Nurex Iftin Technologies Ltd", image: nurexIftinLetterhead },
        { title: "Planet Care Environmental Consultants", image: planetCareLetterhead },
        { title: "Sheltec Consulting Limited", image: sheltecLetterhead },
        { title: "Tekpath Scientific Limited", image: tekpathLetterhead }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services/graphic-design">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 mb-4">
              <Icon icon={ArrowLeft} size="sm" className="mr-2 text-primary-foreground" />
              Back to Graphic Design
            </Button>
          </Link>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-foreground/20">
              <Icon icon={Palette} size="xl" className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Design Portfolio
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              Browse our collection of logos, posters, flyers, letterheads and more
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Categories */}
      {categories.map((category, categoryIndex) => (
        <section 
          key={category.id} 
          id={category.id}
          className={`py-16 ${categoryIndex % 2 === 1 ? 'bg-secondary/30' : ''}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </motion.div>
            
            {category.items.length > 0 ? (
              <>
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial={false}
                  animate="visible"
                  key={`${category.id}-${expandedCategories.includes(category.id)}`}
                >
                  {(expandedCategories.includes(category.id) 
                    ? category.items 
                    : category.items.slice(0, ITEMS_PER_PAGE)
                  ).map((item, index) => (
                    <motion.div
                      key={`${category.id}-${index}`}
                      variants={itemVariants}
                      initial={false}
                      className="group relative overflow-hidden rounded-xl bg-card border shadow-sm hover:shadow-card transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(item)}
                    >
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          fetchPriority={index < 3 ? "high" : "low"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                {category.items.length > ITEMS_PER_PAGE && (
                  <div className="text-center mt-8">
                    <Button
                      variant="outline"
                      onClick={() => toggleCategory(category.id)}
                    >
                      {expandedCategories.includes(category.id) 
                        ? "Show Less" 
                        : `View More (${category.items.length - ITEMS_PER_PAGE} more)`}
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 bg-card rounded-xl border border-dashed">
                <p className="text-muted-foreground">Portfolio items coming soon</p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Image Dialog/Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-sm border-none">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <div className="flex flex-col items-center p-6">
              <div className="w-full max-h-[70vh] overflow-hidden rounded-lg">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">
                {selectedImage.title}
              </h3>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Like What You See?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's create something amazing for your brand
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button variant="secondary" size="lg">Get a Quote</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPortfolioPage;
