
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Fri, 03 Mar 2023 12:57:46 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorNeutralTextDefault,
ColorNeutralTextWeak,
ColorNeutralTextMedium,
ColorNeutralTextStrong,
ColorNeutralTextDisabled,
ColorNeutralBackgroundDefault,
ColorNeutralBackgroundDefaultApp,
ColorNeutralBackgroundWeak,
ColorNeutralBackgroundWeakApp,
ColorNeutralBackgroundMedium,
ColorNeutralBackgroundStrong,
ColorNeutralBackgroundDisabled,
ColorNeutralBackgroundDisabledApp,
ColorNeutralBackgroundActive,
ColorNeutralBackgroundInactive,
ColorNeutralBackgroundFocus,
ColorNeutralBackgroundBrand,
ColorNeutralBackgroundContent,
ColorNeutralBackgroundOverlay,
ColorNeutralBorderDefault,
ColorNeutralBorderWeak,
ColorNeutralBorderWeakApp,
ColorNeutralBorderMedium,
ColorNeutralBorderStrong,
ColorNeutralBorderDisabled,
ColorNeutralBorderHover,
ColorNeutralIconDefault,
ColorNeutralIconWeak,
ColorNeutralIconMedium,
ColorNeutralIconStrong,
ColorNeutralIconDisabled,
ColorNeutralIconBrand,
ColorNeutralBorderBrand,
ColorActionTextDefault,
ColorActionTextMedium,
ColorActionTextHover,
ColorActionTextPressed,
ColorActionBackgroundDefault,
ColorActionBackgroundWeak,
ColorActionBackgroundStrong,
ColorActionBackgroundHover,
ColorActionBackgroundPressed,
ColorActionBackgroundData,
ColorActionBackgroundBrand,
ColorActionBorderDefault,
ColorActionBorderWeak,
ColorActionBorderHover,
ColorActionBorderPressed,
ColorActionBorderData,
ColorActionIconDefault,
ColorActionIconMedium,
ColorActionIconHover,
ColorActionIconPressed,
ColorActionIconBrand,
ColorNegativeTextDefault,
ColorNegativeTextHover,
ColorNegativeTextPressed,
ColorNegativeTextBrand,
ColorNegativeBackgroundDefault,
ColorNegativeBackgroundWeak,
ColorNegativeBackgroundMedium,
ColorNegativeBackgroundStrong,
ColorNegativeBackgroundData,
ColorNegativeBackgroundHover,
ColorNegativeBackgroundPressed,
ColorNegativeBackgroundBrand,
ColorNegativeBorderDefault,
ColorNegativeIconDefault,
ColorNegativeIconHover,
ColorNegativeIconPressed,
ColorNegativeIconBrand,
ColorPositiveTextDefault,
ColorPositiveTextMedium,
ColorPositiveTextHover,
ColorPositiveBackgroundDefault,
ColorPositiveBackgroundWeak,
ColorPositiveBackgroundData,
ColorPositiveBackgroundBrand,
ColorPositiveBorderDefault,
ColorPositiveIconDefault,
ColorPositiveIconHover,
ColorPositiveIconData,
ColorPositiveIconBrand,
ColorWarningTextDefault,
ColorWarningBackgroundDefault,
ColorWarningBackgroundWeak,
ColorWarningBackgroundMedium,
ColorWarningBackgroundStrong,
ColorWarningBorderDefault,
ColorWarningIconDefault,
ColorWarningIconStrong,
ColorErrorTextDefault,
ColorErrorTextHover,
ColorErrorTextPressed,
ColorErrorBackgroundDefault,
ColorErrorBackgroundWeak,
ColorErrorBackgroundMedium,
ColorErrorBackgroundHover,
ColorErrorBackgroundPressed,
ColorErrorBorderDefault,
ColorErrorIconDefault,
ColorErrorIconHover,
ColorErrorIconPressed,
ColorAccentTextDefault,
ColorAccentBackgroundDefault,
ColorAccentBackgroundWeak,
ColorAccentBackgroundStrong,
ColorAccentBackgroundBrand,
ColorAccentIconDefault,
ColorAccentIconBrand
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
