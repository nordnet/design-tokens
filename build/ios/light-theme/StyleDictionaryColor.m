
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Fri, 03 Mar 2023 12:40:38 GMT


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
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.431f green:0.431f blue:0.431f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.620f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.961f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.961f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.961f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.878f green:0.878f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.933f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.933f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.259f green:0.259f blue:0.259f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.400f],
[UIColor colorWithRed:0.741f green:0.741f blue:0.741f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.933f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.933f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.933f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.741f green:0.741f blue:0.741f alpha:1.000f],
[UIColor colorWithRed:0.431f green:0.431f blue:0.431f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.431f green:0.431f blue:0.431f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.620f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.129f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.102f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.149f green:0.314f blue:0.749f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.251f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.941f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.251f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.149f green:0.314f blue:0.749f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.251f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.149f green:0.314f blue:0.749f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.784f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.678f green:0.769f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.149f green:0.314f blue:0.749f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.251f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.420f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.149f green:0.314f blue:0.749f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.251f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.784f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.133f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.675f green:0.075f blue:0.353f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.004f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.133f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.906f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.133f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.675f green:0.075f blue:0.353f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.667f blue:0.804f alpha:1.000f],
[UIColor colorWithRed:0.675f green:0.075f blue:0.353f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.004f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.133f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.133f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.675f green:0.075f blue:0.353f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.004f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.169f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:0.255f green:0.635f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.255f green:0.635f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.212f green:0.529f blue:0.086f alpha:1.000f],
[UIColor colorWithRed:0.255f green:0.635f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.929f green:0.980f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.725f green:0.918f blue:0.651f alpha:1.000f],
[UIColor colorWithRed:0.824f green:0.961f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.255f green:0.635f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.255f green:0.635f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.212f green:0.529f blue:0.086f alpha:1.000f],
[UIColor colorWithRed:0.255f green:0.635f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.824f green:0.961f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.380f green:0.310f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.733f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.992f blue:0.949f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.969f blue:0.831f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.733f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.733f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.812f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.224f blue:0.161f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.169f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.110f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.278f blue:0.200f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.925f blue:0.918f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.224f blue:0.161f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.224f blue:0.161f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.169f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.224f blue:0.161f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.224f blue:0.161f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.169f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:0.400f green:0.110f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.565f blue:0.529f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.753f blue:0.706f alpha:1.000f],
[UIColor colorWithRed:0.898f green:0.992f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.376f blue:0.353f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.941f blue:0.882f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.565f blue:0.529f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.941f blue:0.882f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
