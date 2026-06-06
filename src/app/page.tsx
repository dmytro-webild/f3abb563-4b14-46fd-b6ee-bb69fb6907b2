"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Work", id: "work" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Unlock Immersive Animated Web Experiences"
          description="We craft dynamic, visually stunning websites that captivate your audience and tell your brand's unique story through motion and interactive landscapes."
          tag="Dynamic Digital Journeys"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "cell-wave" }}
          buttons={[
            { text: "Start Project", href: "#contact" },
            { text: "View Work", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/tattooed-hand-holding-h-sign-isolated-white_53876-63828.jpg", imageAlt: "Abstract digital landscape, flowing lines" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7c5flu", imageAlt: "Vibrant UI animation, smooth transitions" },
            { imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-letter-s-sign_53876-63787.jpg", imageAlt: "Generative art website, flowing patterns" },
            { imageSrc: "http://img.b2bpic.net/free-photo/closeup-up-portrait-s-suspicious-cautious-child-boy_93675-134124.jpg", imageAlt: "Dynamic website homepage, subtle animations" },
            { imageSrc: "http://img.b2bpic.net/free-photo/abstract-plexus-blue-geometrical-shapes-connection-ai-generated-image_511042-598.jpg", imageAlt: "Interactive 3D web element" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/usb-cable-type-c-white-isolated-background_58702-4497.jpg", imageAlt: "Futuristic UI, animated elements" },
            { imageSrc: "http://img.b2bpic.net/free-photo/funny-handsome-adult-man-dancing-showing-peace-v-sign-smiling-stay-positive-cheer-you-up-fool-around-showing-fun-faces-standing-white-wall_176420-38442.jpg", imageAlt: "Immersive web background, motion graphics" },
            { imageSrc: "http://img.b2bpic.net/free-photo/letter-n-made-green-grass-with-flowers-isolated-transparent-background_169016-59603.jpg", imageAlt: "Digital art, landscape with moving elements" },
            { imageSrc: "http://img.b2bpic.net/free-photo/letter-n-made-green-grass-with-flowers-isolated-white_169016-57381.jpg", imageAlt: "Responsive website, animated on different devices" }
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Crafting Your Digital Landscape"
          description="From animated interfaces to robust backends, we build experiences that resonate and perform."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "All Services", href: "#services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "Immersive SEO Strategies",              description: "We optimize your digital landscapes to ensure visibility and draw organic traffic into your animated world.",              bentoComponent: "marquee",              centerIcon: Search,
              variant: "text",              texts: ["Visibility", "Engagement", "Rankings", "Organic Flow", "Interactive SERP", "Content Animation"],
            },
            {
              title: "Dynamic Web Development",              description: "Building high-performance, animated websites with seamless user experiences and cutting-edge tech.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-letter-c_53876-63824.jpg", imageAlt: "Website development, dynamic UI, code animation" },
                { imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-balloon-letter-b_53876-63172.jpg", imageAlt: "Web animations, interactive elements" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=exjyl3", imageAlt: "Responsive design, animated on devices" },
              ],
            },
            {
              title: "Animated Brand Narratives",              description: "Creating a brand identity that moves and evolves, capturing attention in every digital interaction.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/letter-n-made-green-grass-with-flowers-isolated-white_169016-57160.jpg", imageAlt: "Branding, motion graphics, logo animation" },
                { imageSrc: "http://img.b2bpic.net/free-photo/3d-letter-fire-with-flames_23-2151073733.jpg", imageAlt: "Vibrant brand guide, digital elements" },
                { imageSrc: "http://img.b2bpic.net/free-photo/hands-holding-letter_53876-63656.jpg", imageAlt: "Interactive brand presentation" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Our Animated Creations"
          description="Explore a portfolio of projects where design meets dynamic functionality, bringing brands to life."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Work", href: "#work" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "Aurora Arts Collective",              description: "Animated landing page for a creative agency",              imageSrc: "http://img.b2bpic.net/free-photo/letter-n-made-green-grass-with-flowers-isolated-transparent-background_169016-59603.jpg",              imageAlt: "Animated landing page for a creative agency",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Zenith Luxuries",              description: "Interactive e-commerce experience for luxury goods",              imageSrc: "http://img.b2bpic.net/free-photo/arrow-with-bright-neon-colors_23-2151205005.jpg",              imageAlt: "Interactive e-commerce experience for luxury goods",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Digital Echoes Gallery",              description: "Dynamic portfolio for a digital artist",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fg28mb",              imageAlt: "Dynamic portfolio for a digital artist",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Innovate Academy",              description: "Engaging educational platform with motion elements",              imageSrc: "http://img.b2bpic.net/free-photo/letter-t-made-green-grass-with-flowers-isolated-white_169016-57461.jpg",              imageAlt: "Engaging educational platform with motion elements",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Quantum Ventures",              description: "Immersive corporate website with subtle animations",              imageSrc: "http://img.b2bpic.net/free-photo/grass-letter-u-alphabet-d-design-isolated-transparent-background_169016-57244.jpg",              imageAlt: "Immersive corporate website with subtle animations",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
          ]}
        />
        <FeatureBento
          title="Our Commitment to Motion & Excellence"
          description="We promise to deliver visually rich, high-performing web experiences that stand out."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Adaptive Landscape Views",              description: "Ensuring your animated website flows perfectly across all devices and screen orientations.",              bentoComponent: "phone",              statusIcon: Lock,
              alertIcon: Monitor,
              alertTitle: "Responsive check",              alertMessage: "All breakpoints passed",              apps: [
                { name: "Phone", icon: Phone },
                { name: "SMS", icon: MessageCircle },
                { name: "Books", icon: BookOpen },
                { name: "TV", icon: Tv },
                { name: "Camera", icon: Camera },
                { name: "Music", icon: Music },
                { name: "Settings", icon: Settings },
                { name: "Chat", icon: MessageCircle },
              ],
            },
            {
              title: "Fortified Digital Foundations",              description: "Robust, secure hosting guarantees your dynamic content is always available and protected.",              bentoComponent: "reveal-icon",              icon: Shield,
            },
            {
              title: "Rapid Animation Deployment",              description: "Efficient workflows to bring your animated vision to life swiftly, without compromising on quality.",              bentoComponent: "timeline",              heading: "Project Launch",              subheading: "Week 1",              items: [
                { label: "Discovery & wireframes", detail: "Day 1-3" },
                { label: "Design & development", detail: "Day 4-10" },
                { label: "Testing & deployment", detail: "Day 11-14" },
              ],
              completedLabel: "Live"},
            {
              title: "Harmonious Ecosystems",              description: "Integrating essential tools for a fully functional, interconnected digital experience.",              bentoComponent: "orbiting-icons",              centerIcon: Puzzle,
              items: [
                { icon: Shield },
                { icon: Monitor },
                { icon: Zap },
                { icon: TrendingUp },
              ],
            },
            {
              title: "Evolving Performance Analytics",              description: "Tracking user interaction within your animated site to continuously optimize for growth.",              bentoComponent: "line-chart"},
          ]}
        />
        <TestimonialCardFifteen
          testimonial="Webild's animated web design transformed our brand! The immersive experience they created for our visitors is truly captivating, boosting engagement beyond our expectations."
          rating={5}
          author="— Elena Rodriguez, Creative Director at Nexus Innovations"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/hand-holding-letter-l_53876-63752.jpg", alt: "Client" },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Impactful Digital Footprint"
          description="Our expertise translates into tangible results, powering brands with dynamic web solutions."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "200+", title: "Dynamic Projects", description: "Crafted for global impact and engaging user journeys", icon: Award },
            { id: "satisfaction", value: "98%", title: "Client Delight", description: "Achieved through innovative design and reliable performance", icon: Users },
            { id: "years", value: "10+", title: "Years Innovating", description: "In bringing animated and interactive web solutions to life", icon: TrendingUp },
          ]}
        />
        <FeatureCardSixteen
          title="Beyond Static: Choose Dynamic"
          description="Elevate your online presence with an agency that masters motion and interaction."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Stagnant, unengaging visuals",              "Poor user flow, confusing navigation",              "Generic design lacking unique brand voice",              "Slow performance, frustrating user experience",              "No adaptability to modern screen sizes"],
          }}
          positiveCard={{
            items: [
              "Visually immersive, animated experiences",              "Intuitive and delightful interactive journeys",              "Customized, memorable brand expression",              "Blazing-fast, optimized performance",              "Seamlessly responsive on all devices"],
          }}
        />
        <TeamCardFive
          title="The Architects of Animation"
          description="Meet the visionary team dedicated to bringing your digital landscape to life."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Ava Chen", role: "Lead Motion Designer", imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-number-0_53876-63837.jpg", imageAlt: "Ava Chen" },
            { id: "2", name: "Liam Hayes", role: "Full-Stack Engineer", imageSrc: "http://img.b2bpic.net/free-photo/letter-s-made-green-grass-isolated-white_169016-56931.jpg", imageAlt: "Liam Hayes" },
            { id: "3", name: "Chloe Kim", role: "Creative Strategist", imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-letter-r-sign_53876-47263.jpg", imageAlt: "Chloe Kim" },
          ]}
        />
        <FaqBase
          title="Your Questions, Our Animated Answers"
          description="Demystifying the process of creating your next dynamic web masterpiece."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "How do animated web experiences impact user engagement?", content: "Animated and interactive elements significantly boost user engagement, leading to longer visit times, increased conversions, and a more memorable brand experience by capturing attention and guiding users through content dynamically." },
            { id: "2", title: "What is the typical timeline for an animated website project?", content: "The timeline for an animated website project can vary depending on its complexity and the extent of custom animations. Generally, projects range from 6-12 weeks, including conceptualization, design, development, and rigorous testing for performance and responsiveness." },
            { id: "3", title: "Will an animated website affect my SEO performance?", content: "When implemented correctly, animated websites can actually enhance SEO by improving user engagement metrics like dwell time and reducing bounce rates. We ensure animations are optimized for performance and accessibility, using modern techniques that search engines favor, rather than hinder." },
            { id: "4", title: "What kind of animations can be integrated into my website?", content: "We offer a wide range of animations, from subtle micro-interactions and smooth transitions to full-screen motion graphics, 3D elements, and interactive scroll-based narratives. Our approach is always tailored to your brand's unique story and user experience goals." },
            { id: "5", title: "Do you provide ongoing support and updates for animated websites?", content: "Absolutely. We offer comprehensive post-launch support and maintenance packages, ensuring your animated website remains cutting-edge, secure, and performs flawlessly as technologies evolve and your business needs change." },
          ]}
        />
        <ContactCTA
          tag="Step into Motion"
          title="Ready to Design Your Dynamic Digital Landscape?"
          description="Let's collaborate to create an animated web experience that truly stands out and captivates your audience."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Start Your Project", href: "#contact" },
            { text: "View Our Work", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild. All rights reserved."
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Web Development", href: "#" },
                { label: "SEO", href: "#" },
                { label: "Branding", href: "#" },
                { label: "UI/UX Design", href: "#" },
              ],
            },
            {
              title: "Connect",              items: [
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Dribbble", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
