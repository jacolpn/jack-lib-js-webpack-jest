// types.d.ts
declare module './linguagens-de-programacao.json' {
    type Language =
      | "JavaScript"
      | "Java"
      | "Python"
      | "C#"
      | "PHP"
      | "C++"
      | "C"
      | "Typescript"
      | "Ruby"
      | "Swift"
      | "Assembly"
      | "Go"
      | "Cobol"
      | "R"
      | "Pearl";
  
    const linguagens: Language[];
  
    export = linguagens;
}
  
declare function capitalize(word: string): string;
  
export { capitalize };
  