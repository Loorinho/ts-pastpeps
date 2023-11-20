const UploadPaper = () => {
  return (
    <section className="flex justify-center items-center h-[calc(100vh-10vh)]">
      <div className="px-4">
        <h3 className="text-center text-3xl mt-[-150px] pt-7 pb-5">
          Contribute and earn: Upload your past papers
        </h3>
        <p className="text-center text-xl">
          {" "}
          Your past papers are more valuable than you think. Don't let them
          collect dust; share them with us and help us grow our database. If you
          have past papers that aren't in our collection, share them with us and
          receive 2000 UGX per paper as a token of appreciation for each unique
          paper. Together, we can build a comprehensive resource for all
          students..
          {/* 
   - Your past papers can light the way for others on their educational journey. Don't let your valuable notes sit idle; upload them, and let your insights benefit students far and wide. As a token of our gratitude, we offer 2000 UGX for each past paper that becomes a valuable addition to our growing repository. Together, we can shape the future of learning. */}
        </p>

        <div className="flex justify-center items-center mt-[70px]">
          <button className="bg-[#007791] rounded-lg px-6 py-2 text-white">
            Upload Paper
          </button>
        </div>
      </div>
    </section>
  );
}

export default UploadPaper