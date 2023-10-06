// Defining a type 'UnionOfArrayElements' that takes a readonly array and represents the union of its elements
export type UnionOfArrayElements<ARR_T extends Readonly<unknown[]>> = ARR_T[number];


// Array of political parties
export const parties = ["Høyre", "Venstre", "Rødt", "AP", "SP", "SV", "FrP", "KrF", "MDG"]


export const possibleIcons = parties.map(p => `${p}.png`)


// Type representing the union of elements in the 'parties' array
type Parties = UnionOfArrayElements<typeof parties>


// Interface representing a question with opinions from different parties
export interface Question {
    question: string
    opinions: {
        [party in Parties]: number
    }
}


// Interface representing the configuration object with questions and available parties
export interface Config {
    questions: Question[]
    parties: Parties[]
}


// Configuration object containing an array of questions and the available parties
const config: Config = {
    questions: [
        {
            question: "Bør vi ha lekser i skolen?",
            opinions: {
                "Høyre": 1,
                "Venstre": 1,
                "Rødt": 0,
                "AP": 1,
                "SP": 0,
                "SV": 0,
                "FrP": 1,
                "KrF": 1,
                "MDG": 0
            }
        },
        {
            question: "Bør vi gi pengestøtte til bønder?",
            opinions: {
                "Høyre": 0.5,
                "Venstre": 1,
                "Rødt": 1,
                "AP": 1,
                "SP": 1,
                "SV": 1,
                "FrP": 0,
                "KrF": 1,
                "MDG": 0
            }
        },
        {
            question: "Bør vi senke skattene?",
            opinions: {
                "Høyre": 1,
                "Venstre": 0,
                "Rødt": 1,
                "AP": 0,
                "SP": 0,
                "SV": 1,
                "FrP": 1,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi ha strengere straffer?",
            opinions: {
                "Høyre": 0,
                "Venstre": 0,
                "Rødt": 1,
                "AP": 0,
                "SP": 0,
                "SV": 1,
                "FrP": 1,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi få flere private sykehus?",
            opinions: {
                "Høyre": 1,
                "Venstre": 0,
                "Rødt": 0,
                "AP": 0,
                "SP": 1,
                "SV": 0,
                "FrP": 0,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi beholde kontantstøtten?",
            opinions: {
                "Høyre": 0.5,
                "Venstre": 1,
                "Rødt": 0,
                "AP": 0,
                "SP": 1,
                "SV": 0,
                "FrP": 0,
                "KrF": 0,
                "MDG": 0
            }
        },
        {
            question: "Bør vi ha flere bomstasjoner?",
            opinions: {
                "Høyre": 0,
                "Venstre": 1,
                "Rødt": 1,
                "AP": 0,
                "SP": 0,
                "SV": 1,
                "FrP": 0,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi ta imot flere flyktninger?",
            opinions: {
                "Høyre": 1,
                "Venstre": 1,
                "Rødt": 1,
                "AP": 1,
                "SP": 1,
                "SV": 1,
                "FrP": 0,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi finne nye oljefelt?",
            opinions: {
                "Høyre": 1,
                "Venstre": 0,
                "Rødt": 0,
                "AP": 1,
                "SP": 0,
                "SV": 1,
                "FrP": 1,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi satse mer på fornybar energi?",
            opinions: {
                "Høyre": 0,
                "Venstre": 0,
                "Rødt": 1,
                "AP": 0,
                "SP": 1,
                "SV": 1,
                "FrP": 0,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi øke pensjonsalderen?",
            opinions: {
                "Høyre": 0,
                "Venstre": 1,
                "Rødt": 1,
                "AP": 0,
                "SP": 1,
                "SV": 1,
                "FrP": -1,
                "KrF": 1,
                "MDG": 1
            }
        },
        {
            question: "Bør vi forby reklame for usunne matvarer?",
            opinions: {
                "Høyre": 1,
                "Venstre": 1,
                "Rødt": 1,
                "AP": 1,
                "SP": 1,
                "SV": 1,
                "FrP": -1,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi innføre en universell grunninntekt?",
            opinions: {
                "Høyre": -1,
                "Venstre": 0,
                "Rødt": 1,
                "AP": 0,
                "SP": 0,
                "SV": 0,
                "FrP": 0,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi redusere arbeidstiden?",
            opinions: {
                "Høyre": 0,
                "Venstre": 0,
                "Rødt": 0,
                "AP": 0,
                "SP": 0,
                "SV": 0,
                "FrP": 0,
                "KrF": 0,
                "MDG": 1
            }
        },
        {
            question: "Bør vi øke minstelønnen?",
            opinions: {
                "Høyre": 0,
                "Venstre": 1,
                "Rødt": 1,
                "AP": 0,
                "SP": 1,
                "SV": 1,
                "FrP": 0,
                "KrF": 0,
                "MDG": 1
            }
        },


    ], parties: parties // Assigning the 'parties' array to the 'parties' property in the configuration object
}

export const partyIcons: { [key: string]: string } = {
    "Høyre": "/icons/hyre.png",
    "Venstre": "/icons/venstre.png",
    "Rødt": "/icons/rodt.png",
    "AP": "/icons/ap.png",
    "SP": "/icons/sp.png",
    "SV": "/icons/sv.png",
    "FrP": "/icons/frp.png",
    "KrF": "/icons/krf.png",
    "MDG": "/icons/mdg.png"    
  };



export default config
