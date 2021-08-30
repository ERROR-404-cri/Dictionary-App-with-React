export interface ResponseModel {
  word: string;
  phonetic: string;
  phonetics: PhoneticsModel[];
  origin: string;
  meanings: MeaningsModel[];
  error: string;
}

export interface PhoneticsModel {
  text: string;
  audio: string;
}

export interface MeaningsModel {
  partOfSpeech: string;
  definitions: DefinitionsModel[];
}

export interface DefinitionsModel {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}
