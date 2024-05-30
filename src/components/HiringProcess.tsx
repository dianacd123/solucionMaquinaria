import image from "/src/assets/image.jpg"

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function HiringProcess() {
  return (
    <div className="h-full bg-[#0B0A09] p-20 space-x-6 sm:flex sm:h-auto">
  <div className="w-full sm:w-1/2 p-4">
  <div className="flex justify-center mb-8">
    <h1 className="text-[#FDE502] font-bold text-5xl">PROCESO DE CONTRATACIÓN</h1>
  </div>
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>Consulta y Asesoramiento Inicial</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Is there a Figma file available?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
  <div className="flex-1 flex">
    <img className="h-auto object-cover rounded-md" src={image} alt="" />
  </div>
</div>

  );
}
