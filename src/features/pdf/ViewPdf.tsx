import { Document, Page, pdfjs } from "react-pdf"

import File from "./sample.pdf"

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useResizeDetector } from "react-resize-detector";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function ViewPdf() {
  const { width, ref } = useResizeDetector();

  // will help me with the size of the pdf so that it always occupies 100% width
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  //   function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //      setNumPages(numPages);

  //      console.log(numPages)

  //   }
  return (
    <section className="w-full bg-white shadow-sm rounded-md flex flex-col items-center">
      <div className="options w-full border-b border-zinc-200 flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-2.5">
          <div>
            <button
              className="hover:bg-[#007791] hover:text-white rounded px-3 py-2 duration-200"
              disabled={pageNumber <= 1}
              onClick={() =>
                setPageNumber((prev) => (prev - 1 > 1 ? prev - 1 : 1))
              }
            >
              <ChevronDown />
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <p>Page {pageNumber}</p>

            <p className="text-zinc-700 text-md space-x-1">
              <span>/</span>
              <span>{numPages}</span>
            </p>
          </div>

          <div>
            <button
              className="hover:bg-[#007791] hover:text-white rounded px-3 py-2 duration-200"
              disabled={numPages === undefined || pageNumber === numPages}
              onClick={() =>
                setPageNumber((prev) =>
                  prev + 1 > numPages! ? numPages! : prev + 1
                )
              }
            >
              <ChevronUp />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-h-screen">
        <div ref={ref}>
          <Document
            file={File}
            loading={
              <div>
                <p>Your pdf is loading, be patient..</p>
              </div>
            }
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              //   console.log(numPages)
            }}
            className="max-h-full"
          >
            <Page pageNumber={pageNumber} width={width ? width : 1} />
          </Document>
        </div>
      </div>
    </section>
  );
}
