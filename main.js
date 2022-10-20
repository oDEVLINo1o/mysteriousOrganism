
// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Factiory function for creating DNA strands
  const pAequorFactory = (num, bases) => {
    return {
      specimenNum: num,
      dna: bases,

      // meathod to mutate a DNA strand
      mutate () {
        const index = Math.floor(Math.random() * this.dna.length);
        let bTest = returnRandBase();
        while (test === this.dna[index]) {
          bTest = returnRandBase();
        }
        this.dna[index] = bTest;
      },

      // meathod to compare 2 DNA strands
      compareDNA (newBases) {
        let same = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === newBases.dna[i]) {
            same++;
          }
        }
        same = Math.floor((same / this.dna.length) * 100);
  
        console.log(`specimen ${this.specimenNum} and specimen ${newBases.specimenNum} have ${same}% DNA in common.`)
      },

      // meathod to tell if a DNA strand will survive
      willLikelySurvive () {
  
        let CorG = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna === 'G') {
            CorG++;
          }
        }
        CorG = Math.floor((CorG / this.dna.length) * 100);
        if (CorG > 59) {
          return true;
        }
        else {
          return false;
        }
      },

      // Meathod to create 30 DNA that will survive
      create30 () {
        let i = 1;
        let strand = [];
        let sTest;
        while (i < 31) {
          sTest = pAequorFactory(i, mockUpStrand());
          if (test.willLikelySurvive() === true) {
            strand[i] = sTest.dna;
            console.log(`Num: ${sTest.specimenNum} DNA: ${strand[i]} is likely to survive.`);
            i++;
          }
        }
      },
    }
  }
  



// create 2 DNA strands
const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());

// compare 2 DNA strands
test1.compareDNA(test2);

// provides 30 DNA strands that are lekely to survive 
test1.create();
  

  
  