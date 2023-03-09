
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Thu, 09 Mar 2023 10:30:24 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.741f green:0.741f blue:0.741f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.431f green:0.431f blue:0.431f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.071f green:0.071f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.071f green:0.071f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.259f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.259f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.071f green:0.071f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.259f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.259f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.600f],
[UIColor colorWithRed:0.431f green:0.431f blue:0.431f alpha:1.000f],
[UIColor colorWithRed:0.071f green:0.071f blue:0.071f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.259f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.259f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.741f green:0.741f blue:0.741f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.741f green:0.741f blue:0.741f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.431f green:0.431f blue:0.431f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:0.149f],
[UIColor colorWithRed:0.400f green:0.565f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.678f green:0.769f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.839f green:0.882f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.078f green:0.169f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.251f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.149f green:0.314f blue:0.749f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.251f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.753f blue:0.706f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.784f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.039f green:0.082f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.678f green:0.769f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.839f green:0.882f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.941f blue:0.882f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.565f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.678f green:0.769f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.839f green:0.882f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.784f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.416f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.667f blue:0.804f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.133f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.349f green:0.059f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:0.675f green:0.075f blue:0.353f alpha:1.000f],
[UIColor colorWithRed:0.675f green:0.075f blue:0.353f alpha:1.000f],
[UIColor colorWithRed:0.675f green:0.075f blue:0.353f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.004f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.416f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.667f blue:0.804f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.796f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.824f green:0.961f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.522f green:0.855f blue:0.384f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.796f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.125f green:0.318f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.192f green:0.478f blue:0.075f alpha:1.000f],
[UIColor colorWithRed:0.824f green:0.961f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.796f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.796f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.522f green:0.855f blue:0.384f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.824f green:0.961f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.380f green:0.310f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.161f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.278f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.494f blue:0.439f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.639f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.278f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.110f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.278f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.224f blue:0.161f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.169f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.278f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.278f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.494f blue:0.439f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.639f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.941f blue:0.882f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.941f blue:0.882f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.282f blue:0.267f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.376f blue:0.353f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.941f blue:0.882f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.941f blue:0.882f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.941f blue:0.882f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
