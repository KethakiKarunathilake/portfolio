import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";

import { FaGuitar,FaPencilAlt ,  FaUsers , FaBullhorn,FaCode} from 'react-icons/fa';

import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

const aboutStats = [
  { label: "Years of experience in teaching (ICT)", value: "4+" , color:"#c70cbe" },
  { label: "Projects in ICT", value: "2+" },
  { label: "Working in organizations", value: "5+" },
];

const projects = [
  {
    title: "Unqueue",
    description: "My portfolio web site",
    image: "/assets/webiss.png",
    href: "https://unqueue.shop/",
  },
  /*
  {
    title: "InfiniteVPS",
    description: "High performance VPS hosting solution",
    image: "/assets/infinitevps.webm",
    href: "#",
  },
  {
    title: "TranslateBot",
    description: "Powerful Multilingual Translation Bot for Discord",
    image: "/assets/translate_bot.webm",
    href: "https://translatebot.app/",
  },
  {
    title: "Wrona",
    description: "Robotics-focused technology company",
    image: "/assets/wrona.jpeg",
    href: "https://www.wrona.com/",
  },
  {
    title: "This website",
    description: "My personal website",
    image: "/assets/portfolio.webm",
    href: "https://github.com/wendoj/portfolio",
  }, */
];

const services = [
  {
    service: "Singing & Playing musical instruments",
    description:
      "I have done diploma in Bhatkhande for singing.As well as I can play many musical instruments like violin, guitar, sitar, tabla, trombone.",
    icon: FaGuitar,
  },

  {
    service: "Creative writing",
    description:
      "I have the ability to compose Sinhala songs and poems creatively. I have won many competitions for that.",
    icon: FaPencilAlt,
  },

  {
    service: "Leadership",
    description:
      "I can lead a team and help them to achieve their goals.I have a lot of experience holding leadership responsibilities in many societies and companies.",
    icon: FaUsers,
    
  },
  {
    service: "Announcing",
    description:
      "The announcing field is one of my favorite fields. I hope to further develop my announcing skills.",
    icon: FaBullhorn ,
  },
  
  {
    service: "Web development",
    description:
      "I'm not an expert in web development, but I'm trying to improve that skill and learn for it",
    icon: FaCode,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (

    <Container>


      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>ICT</span>
              <span className={styles.pill}>Music</span>
              <span className={styles.pill}>Social works</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
                className="clash-grotesk text-gradient text-6xl 2xl:text-8xl customColor"
              >
                <span  className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span style= {{color:"#f10e98" }} className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                 Kethaki Karunathilake
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                
              </p>
              Bsc.(Hons) in Information Technology - Undergraduate <br/>
              University of Sri Jayewardenepura 
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:kethakikarunathilake@gmail.com" passHref>
                <Button >
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => window.location.href = "https://drive.google.com/file/d/1vM3MLIhqu7vOUDoL0oXDPm52iOHG3HT_/view?usp=sharing"}
              >
                Resume
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
         
          <div
           // data-scroll
            //data-scroll-speed="-.01"
            //id={styles["canvas-container"]}
           // className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <img src= "https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-6/433880495_1631931444301031_8837518557356348561_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGwp8I-XXGsDA3tv4CoYsu2Ar1v7Yobo9gCvW_tihuj2Ko4zaVJMEyvYm1grI2f2rb0jzr3zJlroWwBOfNOww2e&_nc_ohc=Pai1B2LsHxoAb58bE9U&_nc_zt=23&_nc_ht=scontent.fcmb3-2.fna&cb_e2o_trans=q&oh=00_AfCreIS1q-dqMzvldFTzLE-Vr1FhNIM7lBe6_CzdVVsd3g&oe=6622C6D2" 
                 style={{ borderRadius: '50%', width: '950px', height: '600px' }}/>
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
             <h6 style= {{fontSize:'25px', textAlign:'justify'}}className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]" >
           
           <p style={{marginBottom: '1em'}}>I am a dedicated student currently pursuing a BSc. (Hons) in Information Technology at the esteemed University of Sri 
            Jayewardenepura, Sri Lanka. Alongside my academic journey, I am fueled by a diverse range of passions and interests that
             define me as a multifaceted individual. </p>

             <p style={{marginBottom: '1em' , color: '#f10e98'}}> My innate ability to effectively communicate is demonstrated through my passion for singing and announcing, which have allowed me 
to express myself and connect with others on various platforms. Furthermore, my knack for project management underscores my penchant
 for organization and leadership, qualities that I continuously hone through my academic and extracurricular pursuits.</p> 

 <p style={{marginBottom: '1em'}}> In addition to my technical pursuits, I am deeply drawn to the realm of creative expression. Writing poetry serves as an outlet for
 my imagination and emotions, reflecting my profound appreciation for the beauty of language and artistic expression. </p> 

<p style={{marginBottom: '1em' , color: '#f10e98'}}>Beyond the confines of academia and creativity, I am driven by a profound love for animals. As a dedicated volunteer in animal 
welfare initiatives, I actively contribute to causes aimed at improving the lives of our furry friends, embodying compassion and 
empathy in action.</p>

<p style={{marginBottom: '1em'}}>With a blend of technical proficiency, communication finesse, creative flair, and unwavering compassion, I am poised to make 
meaningful contributions in both professional and personal realms. I am eager to 
continue my journey of growth, learning, and impact in the pursuit of my passions and aspirations.</p>
            </h6> 
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span style={{ fontSize: '50px', color: '#f10e98' }} className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
            My digital endeavors
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
            Although there are several projects that I have done as an undergraduate, I have presented my successful project here.
            </p>

            {/* Carousel */}
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                         
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={1000}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          

                          
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                Would you like to know about my talents?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal" style={{ color: '#f10e98' }}>
                  Here I am going to tell about them..
                  </span>
                </h2>
               
              </div>
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
            We will meet again;{" "}
              <span className="text-gradient clash-grotesk">With love.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
            If you want to contact me, click the button below.
            </p>
           
              <Button className="mt-6" onClick={() => window.open("https://www.linkedin.com/in/kethaki-karunathilake")} style={{ backgroundColor: '#f10e98' , color: 'white' }}>Get in touch</Button>
            
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
