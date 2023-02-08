const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log(panel.id);
    removeActiveClasses();
    panel.classList.add("active");
    
    let  bib = Number(panel.id);
    console.log(typeof(bib));

    switch(bib) {
      case 1:
        document.getElementById("intro").innerHTML = "Vercel Inc., formerly Zeit, is an American cloud platform as a service company. "
        +"The company maintains the Next.js web development framework. "
        +"Vercel's architecture is built around Jamstack, and deployments are handled through Git repositories.";
        break;
      case 2:
        document.getElementById("intro").innerHTML ="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
        break;

      case 3: 
      document.getElementById("intro").innerHTML ="Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables."
        break;
      case 4:
       document.getElementById("intro").innerHTML="GitHub, Inc. is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. "
      break
      case 5:
        document.getElementById("intro").innerHTML="Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git."
      default:
       
    }

  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
