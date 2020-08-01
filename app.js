
function App(){
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var dom = [".com", ".top", ".org", ".net", "click"];

    for ( let a = 0; a<pronoun.length; a++) {
    
        for (let b = 0;  b<adj.length; b++){
            
            
            for ( let c = 0; c<noun.length; c++) {
            

                for( let d= 0; d<dom.length; d++){
                    console.log(pronoun[a].concat(adj[b]).concat(noun[c]).concat(dom[d]));
                }
            }
        }
}
};