import {TextStyle} from "react-native"

const FONT_FAMILY_BOLD = "Inter-Bold" as const
const FONT_FAMILY_MEDIUM = "Inter-Medium" as const
const FONT_FAMILY_REGULAR = "Inter-Regular" as const

const FONT_STYLE = "normal" as const

interface TextStyleMap {
  [name: string]: TextStyle
}

/* eslint-disable camelcase */
interface Typography {
  Title_1: TextStyle
  Title_2: TextStyle
  Title_3: TextStyle
  Large: {
    None: TextStyleMap
    Tight: TextStyleMap
    Normal: TextStyleMap
  }
  Regular: {
    None: TextStyleMap
    Tight: TextStyleMap
    Normal: TextStyleMap
  }
  Small: {
    None: TextStyleMap
    Tight: TextStyleMap
    Normal: TextStyleMap
  }
  Tiny: {
    None: TextStyleMap
    Tight: TextStyleMap
    Normal: TextStyleMap
  }
}

export const Typography: Typography = {
  Title_1: {
    fontFamily: FONT_FAMILY_BOLD,
    fontStyle: FONT_STYLE,
    fontSize: 48,
    lineHeight: 56,
    fontWeight: "700",
  },
  Title_2: {
    fontFamily: FONT_FAMILY_BOLD,
    fontStyle: FONT_STYLE,
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "700",
  },
  Title_3: {
    fontFamily: FONT_FAMILY_BOLD,
    fontStyle: FONT_STYLE,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
  },
  Large: {
    None: {
      Bold: {
        fontFamily: FONT_FAMILY_BOLD,
        fontStyle: FONT_STYLE,
        fontSize: 18,
        lineHeight: 18,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 18,
        lineHeight: 18,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 18,
        lineHeight: 18,
        fontWeight: "400",
      },
    },
    Tight: {
      Bold: {
        fontFamily: FONT_FAMILY_BOLD,
        fontStyle: FONT_STYLE,
        fontSize: 18,
        lineHeight: 20,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 18,
        lineHeight: 20,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 18,
        lineHeight: 20,
        fontWeight: "400",
      },
    },
    Normal: {
      Bold: {
        fontFamily: FONT_FAMILY_BOLD,
        fontStyle: FONT_STYLE,
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "400",
      },
    },
  },
  Regular: {
    None: {
      Bold: {
        fontFamily: FONT_FAMILY_BOLD,
        fontStyle: FONT_STYLE,
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "400",
      },
    },
    Tight: {
      Bold: {
        fontFamily: FONT_FAMILY_BOLD,
        fontStyle: FONT_STYLE,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "400",
      },
    },
    Normal: {
      Bold: {
        fontFamily: FONT_FAMILY_BOLD,
        fontStyle: FONT_STYLE,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
      },
    },
  },
  Small: {
    None: {
      Bold: {
        fontFamily: FONT_FAMILY_BOLD,
        fontStyle: FONT_STYLE,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "400",
      },
    },
    Tight: {
      Bold: {
        fontFamily: FONT_FAMILY_BOLD,
        fontStyle: FONT_STYLE,
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "400",
      },
    },
    Normal: {
      Bold: {
        fontFamily: FONT_FAMILY_BOLD,
        fontStyle: FONT_STYLE,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "400",
      },
    },
  },
  Tiny: {
    None: {
      Bold: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: "400",
      },
    },
    Tight: {
      Bold: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "400",
      },
    },
    Normal: {
      Bold: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "700",
      },
      Medium: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontStyle: FONT_STYLE,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "500",
      },
      Regular: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontStyle: FONT_STYLE,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
      },
    },
  },
}
