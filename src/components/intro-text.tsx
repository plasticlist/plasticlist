"use client"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SubscribeEmailForm } from "@/components/subscribe-email-form"

const OverlayTrigger = ({ children, content }: { children: React.ReactNode, content: React.ReactNode }) => (
  <>
    <Popover>
      <PopoverTrigger asChild>
        <span className="sm:hidden underline">{children}</span>
      </PopoverTrigger>
      <PopoverContent className="w-80">{content}</PopoverContent>
    </Popover>
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="hidden sm:inline underline">{children}</span>
      </TooltipTrigger>
      <TooltipContent className="max-w-sm">{content}</TooltipContent>
    </Tooltip>
  </>
)

type IntroTextProps = {
  onEmailSubmit: (email: string) => void;
};

export function IntroText({ onEmailSubmit }: IntroTextProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="space-y-4">
        <p>
          <OverlayTrigger
            content={
              <p><a href="https://ehp.niehs.nih.gov/doi/10.1289/ehp.1306681" className="text-blue-500">The National Health and Nutrition Examination Survey (2001–2010)</a> found that at least 98% of participants had plastic chemicals called phthalates in their systems, with children having higher levels than adults.</p>
            }
          >
            Almost all
          </OverlayTrigger>
          {" "}people in the US{" "}
          <OverlayTrigger
            content={
              <>
                <p>Little plastic particles called microplastics and nanoplastics chip off or melt off of the bigger pieces of plastic, and they get everywhere.</p>
                <br />
                <p><a href="https://www.sciencedirect.com/science/article/pii/S2215153221001835" className="text-blue-500">Jadhav et al. (2021)</a> found that microplastics from food packaging contaminate food and beverages. People consume these microplastics daily through packaged food and drinks.</p>
              </>
            }
          >
            eat
          </OverlayTrigger>
          ,{" "}
          <OverlayTrigger
            content={
              <>
                <p><a href="https://iris.who.int/bitstream/handle/10665/362049/9789240054608-eng.pdf?sequence=1#page=30" className="text-blue-500">WHO (2022)</a> summarized studies showing that both tap and bottled water contain nano- and microplastic particles.</p>
                <br />
                <p><a href="https://pubs.acs.org/doi/10.1021/acs.est.1c06768" className="text-blue-500">Zangmeister et al. (2022)</a> found that single-use plastics, such as nylon bags and beverage cups, release trillions of particles into water. These particles are small enough to be taken up by human cells.</p>
              </>
            }
          >
            drink
          </OverlayTrigger>
          , and{" "}
          <OverlayTrigger
            content={
              <>
                <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1241713/" className="text-blue-500">Adibi et al. (2003)</a> found that pregnant women in New York City and Krakow, Poland, were significantly exposed to plastic chemicals called phthalates, with 100% detection in air and urine samples.</p>
                <br />
                <p><a href="https://pubmed.ncbi.nlm.nih.gov/14594359/" className="text-blue-500">Rudel et al. (2003)</a> found widespread presence of various chemicals in indoor air and dust across 120 homes. Some compounds exceeded health guidelines.</p>
              </>
            }
          >
            inhale
          </OverlayTrigger>
          {" "}plastic every day. Especially{" "}
          <OverlayTrigger
            content={
              <>
                <p><a href="https://pubmed.ncbi.nlm.nih.gov/14762970/" className="text-blue-500">Koch et al. (2004)</a> found that nursery school children have twice the internal exposure to a plastic chemical called DEHP compared to their parents and teachers.</p>
                <br />
                <p><a href="https://sproutsanfrancisco.com/get-educated/test-banned-dehp-phthalates/" className="text-blue-500">Sprout San Francisco (2018)</a> found that all their children had DEHP in their systems, with higher levels in 6- and 8-year-olds compared to 12-year-old.</p>
                <br />
                <p><a href="https://pubmed.ncbi.nlm.nih.gov/16466535/" className="text-blue-500">Koch et al. (2006)</a> found that premature newborns in Germany had DEHP exposure levels up to 100 times above safety limits, primarily due to intensive medical care involving DEHP-containing devices.</p>
              </>
            }
          >
            small children.
          </OverlayTrigger>
        </p>
        <p>
          <OverlayTrigger
            content={
              <p><a href="https://ehp.niehs.nih.gov/doi/10.1289/ehp.1306681" className="text-blue-500">The National Health and Nutrition Examination Survey (2001–2010)</a> found that at least 98% of participants had plastic chemicals called phthalates in their systems, with children having higher levels than adults.</p>
            }
          >
            Emergent research
          </OverlayTrigger>
          {" "}shows that{" "}
          <OverlayTrigger
            content={
              <>
                <p>Plastics have thousands of chemicals added to them. <a href="https://www.sciencedirect.com/science/article/pii/S0160412023004981" className="text-blue-500">Seewoo et al. (2023)</a> documented 1202 additives.</p>
                <br />
                <p>Among them are plasticizers like phthalates, flame retardants, bisphenols, PFAS, and their substitutes.</p>
                <br />
                <p>For some of these chemicals, we know they are harmful. For many others, no one has checked yet.</p>
              </>
            }
          >
            chemicals
          </OverlayTrigger>
          {" "}added to plastic end up inside us and{" "}
          <OverlayTrigger
            content={
              <p><a href="https://www.endocrine.org/-/media/endosociety/files/advocacy-and-outreach/important-documents/introduction-to-endocrine-disrupting-chemicals.pdf#page=22" className="text-blue-500">The Endocrine Society (2014)</a> summarized studies showing that plastic chemicals are linked to neurological and behavioral disorders, obesity, metabolic dysfunction, reproductive disorders, and hormone-sensitive cancers.</p>
            }
          >
            make us sick
          </OverlayTrigger>
          .
        </p>
        <p>
          This may have{" "}
          <OverlayTrigger
            content={
              <p><a href="https://pubmed.ncbi.nlm.nih.gov/17003688/" className="text-blue-500">Hauser et al. (2006)</a> found that a plastic chemical may be altering semen quality in men. Concentrations of the chemical were associated with decreased sperm concentration and motility.</p>
            }
          >
            society-level effects
          </OverlayTrigger>
          {" "}that we attribute to other things.
        </p>
        <div className="border bg-secondary p-4 rounded-md flex flex-col gap-4">
          <p>
            Nat Friedman is <a href="https://twitter.com/natfriedman/status/1789287484515659896" className="underline">running tests</a> to find plastic chemicals in food, drinks, and household items.
          </p>
          <div>
            <p><b>PlasticList</b> is the interface to add and upvote products to test. We will:</p>
            <ul className="list-disc pl-5">
              <li>Send your requests to Nat.</li>
              <li>Notify you when the findings are published.</li>
              <li>If a product has chemicals, explain what it means.</li>
            </ul>
          </div>
          <p>We will add a searchable database of the findings, a template to petition your rep, links to research grants, and more.</p>
          <SubscribeEmailForm onSubmitSuccess={onEmailSubmit} />
        </div>
        <p>
          As of today, we are not affiliated with Nat. If you know Nat and would like to put us in touch, you can forward this{" "}
          <OverlayTrigger
            content={
              <p>Hey Nat,<br /><br /><a href="https://plasticlist.app" className="text-blue-500">plasticlist.app</a> is building a database of your tests for plastic. They want to work with you.<br /><br />If interesting, send them an email at <a href="mailto:team@plasticlist.app" className="text-blue-500">team@plasticlist.app</a>.</p>
            }
          >
            short blurb
          </OverlayTrigger>
          .
        </p>
      </div>
    </TooltipProvider>
  )
}