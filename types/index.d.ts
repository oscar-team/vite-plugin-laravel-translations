/**
 * ##########################################
 * #			        DECLARE TYPES 			      #
 * ##########################################
 */

export declare interface TranslationConfiguration {
  namespace?: string | false;
  // # [TO_DO]: Implement JSON files
  includeJson?: boolean;
  absoluteLanguageDirectory?: string | null; // Optional param to override default langDir if needed
  interpolation?: InterpolationConfiguration | null;
}

export declare interface InterpolationConfiguration {
  prefix: string;
  suffix: string;
}
