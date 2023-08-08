export default function AboutMe() {
  return (
    <div className="bg-gray-700 text-slate-400">
      <div className="max-w-7xl mx-auto py-4">
        <div className="max-w-lg text-3xl mx-auto py-1 text-slate-400">Hi, I'm</div>
        <div className="max-w-lg text-5xl mx-auto py-2 text-sky-500">Lionel Morrison</div>
        <div className="max-w-lg mx-auto py-2 text-md">
          Experienced Full Stack Developer focused on Continuous Integration, Continuous Development, developing APIs,
          and adding a sprinkle of Magic to web applications.
          <div className="flex p-5 text-sm text-slate-400">
            <svg
              className="text-5xl fill-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
            <div className="p-3">
              Any sufficiently advanced technology is indistinguishable from magic -{' '}
              <span className="italic">Arthur C. Clarke</span>
            </div>
            <svg
              className="text-5xl fill-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
