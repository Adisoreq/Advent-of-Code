// Advent of Code 2015
// Day 16 Part 2
// By Adisoreq


// Input

const input = `
Sue 1: children: 1, cars: 8, vizslas: 7
Sue 2: akitas: 10, perfumes: 10, children: 5
Sue 3: cars: 5, pomeranians: 4, vizslas: 1
Sue 4: goldfish: 5, children: 8, perfumes: 3
Sue 5: vizslas: 2, akitas: 7, perfumes: 6
Sue 6: vizslas: 0, akitas: 1, perfumes: 2
Sue 7: perfumes: 8, cars: 4, goldfish: 10
Sue 8: perfumes: 7, children: 2, cats: 1
Sue 9: pomeranians: 3, goldfish: 10, trees: 10
Sue 10: akitas: 7, trees: 8, pomeranians: 4
Sue 11: goldfish: 1, perfumes: 4, cars: 6
Sue 12: samoyeds: 6, trees: 6, perfumes: 2
Sue 13: akitas: 10, pomeranians: 0, vizslas: 2
Sue 14: cars: 2, perfumes: 3, children: 4
Sue 15: goldfish: 2, children: 8, cars: 5
Sue 16: goldfish: 9, cars: 0, vizslas: 5
Sue 17: cats: 5, trees: 6, perfumes: 6
Sue 18: cars: 0, perfumes: 8, pomeranians: 7
Sue 19: trees: 2, goldfish: 5, perfumes: 4
Sue 20: akitas: 4, vizslas: 4, trees: 0
Sue 21: pomeranians: 7, trees: 0, goldfish: 10
Sue 22: cars: 4, vizslas: 0, perfumes: 3
Sue 23: vizslas: 8, trees: 1, akitas: 2
Sue 24: children: 7, trees: 0, akitas: 1
Sue 25: goldfish: 3, akitas: 2, trees: 2
Sue 26: pomeranians: 4, vizslas: 4, samoyeds: 2
Sue 27: cars: 0, trees: 8, akitas: 5
Sue 28: perfumes: 6, cats: 0, cars: 2
Sue 29: trees: 7, akitas: 1, vizslas: 1
Sue 30: perfumes: 9, cars: 9, trees: 10
Sue 31: pomeranians: 5, akitas: 9, samoyeds: 1
Sue 32: pomeranians: 10, vizslas: 5, goldfish: 5
Sue 33: vizslas: 2, akitas: 3, trees: 7
Sue 34: goldfish: 10, perfumes: 0, samoyeds: 7
Sue 35: akitas: 6, cats: 7, perfumes: 10
Sue 36: pomeranians: 8, vizslas: 7, akitas: 6
Sue 37: goldfish: 2, cars: 10, children: 7
Sue 38: goldfish: 2, perfumes: 3, cars: 7
Sue 39: trees: 9, vizslas: 10, cars: 5
Sue 40: goldfish: 1, pomeranians: 0, trees: 2
Sue 41: trees: 2, goldfish: 6, vizslas: 3
Sue 42: akitas: 1, cars: 3, vizslas: 3
Sue 43: akitas: 1, pomeranians: 1, vizslas: 3
Sue 44: goldfish: 7, akitas: 3, vizslas: 10
Sue 45: akitas: 8, samoyeds: 8, goldfish: 2
Sue 46: trees: 0, vizslas: 4, cars: 9
Sue 47: cars: 9, trees: 10, perfumes: 4
Sue 48: akitas: 0, vizslas: 5, perfumes: 4
Sue 49: goldfish: 9, trees: 1, cars: 4
Sue 50: goldfish: 2, perfumes: 5, cars: 2
Sue 51: samoyeds: 1, goldfish: 2, perfumes: 7
Sue 52: cars: 0, perfumes: 4, goldfish: 8
Sue 53: goldfish: 9, vizslas: 2, akitas: 9
Sue 54: trees: 1, goldfish: 9, children: 5
Sue 55: cars: 0, akitas: 5, trees: 4
Sue 56: trees: 4, samoyeds: 5, children: 9
Sue 57: children: 0, vizslas: 8, cars: 3
Sue 58: trees: 4, pomeranians: 5, akitas: 5
Sue 59: vizslas: 10, cats: 3, children: 2
Sue 60: cats: 6, vizslas: 2, cars: 2
Sue 61: akitas: 1, vizslas: 0, children: 4
Sue 62: akitas: 4, trees: 9, children: 10
Sue 63: pomeranians: 6, vizslas: 6, cars: 4
Sue 64: perfumes: 8, pomeranians: 1, children: 8
Sue 65: perfumes: 3, goldfish: 6, trees: 5
Sue 66: goldfish: 10, akitas: 8, vizslas: 4
Sue 67: vizslas: 10, samoyeds: 3, trees: 2
Sue 68: samoyeds: 4, cars: 7, perfumes: 3
Sue 69: perfumes: 2, goldfish: 0, trees: 2
Sue 70: trees: 8, vizslas: 7, akitas: 6
Sue 71: cars: 2, children: 7, perfumes: 3
Sue 72: cars: 1, akitas: 9, perfumes: 0
Sue 73: vizslas: 4, akitas: 7, cars: 5
Sue 74: samoyeds: 3, cars: 3, akitas: 2
Sue 75: trees: 2, cars: 1, vizslas: 7
Sue 76: samoyeds: 9, perfumes: 1, trees: 6
Sue 77: trees: 6, perfumes: 10, cars: 7
Sue 78: trees: 0, children: 8, vizslas: 5
Sue 79: vizslas: 0, trees: 0, samoyeds: 1
Sue 80: trees: 6, goldfish: 8, perfumes: 0
Sue 81: samoyeds: 8, pomeranians: 6, akitas: 5
Sue 82: vizslas: 6, perfumes: 9, akitas: 4
Sue 83: cats: 0, vizslas: 3, pomeranians: 10
Sue 84: cars: 4, perfumes: 6, samoyeds: 5
Sue 85: vizslas: 7, trees: 5, goldfish: 7
Sue 86: goldfish: 2, trees: 2, vizslas: 1
Sue 87: trees: 6, goldfish: 10, pomeranians: 4
Sue 88: vizslas: 1, akitas: 0, perfumes: 8
Sue 89: goldfish: 8, akitas: 3, vizslas: 7
Sue 90: vizslas: 9, akitas: 7, perfumes: 9
Sue 91: children: 7, cars: 7, trees: 9
Sue 92: vizslas: 10, akitas: 8, goldfish: 1
Sue 93: goldfish: 7, vizslas: 2, pomeranians: 0
Sue 94: cats: 2, samoyeds: 6, pomeranians: 3
Sue 95: samoyeds: 4, children: 4, pomeranians: 10
Sue 96: pomeranians: 9, cats: 1, goldfish: 3
Sue 97: trees: 1, akitas: 6, goldfish: 1
Sue 98: vizslas: 7, akitas: 2, perfumes: 7
Sue 99: pomeranians: 6, perfumes: 2, trees: 1
Sue 100: cars: 3, children: 9, trees: 10
Sue 101: children: 0, perfumes: 0, vizslas: 3
Sue 102: cars: 4, goldfish: 5, children: 2
Sue 103: pomeranians: 3, perfumes: 7, cats: 8
Sue 104: akitas: 0, perfumes: 5, vizslas: 5
Sue 105: akitas: 7, vizslas: 2, samoyeds: 8
Sue 106: goldfish: 7, perfumes: 0, cats: 8
Sue 107: cats: 6, pomeranians: 9, cars: 6
Sue 108: akitas: 3, vizslas: 10, cats: 5
Sue 109: akitas: 10, perfumes: 2, cars: 7
Sue 110: goldfish: 7, pomeranians: 1, trees: 1
Sue 111: akitas: 10, samoyeds: 6, vizslas: 6
Sue 112: cats: 6, akitas: 7, trees: 9
Sue 113: akitas: 1, trees: 9, vizslas: 8
Sue 114: vizslas: 2, cats: 1, cars: 4
Sue 115: akitas: 0, trees: 5, goldfish: 7
Sue 116: goldfish: 2, trees: 10, akitas: 2
Sue 117: cars: 4, goldfish: 10, perfumes: 5
Sue 118: cars: 5, perfumes: 6, trees: 0
Sue 119: perfumes: 5, vizslas: 1, cats: 0
Sue 120: perfumes: 8, akitas: 9, vizslas: 4
Sue 121: samoyeds: 2, vizslas: 7, perfumes: 6
Sue 122: children: 6, trees: 9, perfumes: 2
Sue 123: cars: 7, akitas: 0, pomeranians: 0
Sue 124: akitas: 7, cats: 8, vizslas: 5
Sue 125: goldfish: 3, trees: 1, cars: 4
Sue 126: cars: 4, perfumes: 3, akitas: 0
Sue 127: children: 10, vizslas: 5, akitas: 9
Sue 128: akitas: 3, samoyeds: 2, cats: 8
Sue 129: cats: 8, akitas: 1, vizslas: 8
Sue 130: trees: 4, cars: 6, perfumes: 6
Sue 131: akitas: 7, perfumes: 6, goldfish: 9
Sue 132: akitas: 6, vizslas: 7, trees: 1
Sue 133: akitas: 5, vizslas: 7, children: 9
Sue 134: cars: 8, goldfish: 4, pomeranians: 4
Sue 135: samoyeds: 1, pomeranians: 6, akitas: 4
Sue 136: perfumes: 10, goldfish: 1, cars: 3
Sue 137: cars: 3, samoyeds: 6, vizslas: 7
Sue 138: samoyeds: 10, akitas: 3, perfumes: 4
Sue 139: perfumes: 10, vizslas: 2, goldfish: 7
Sue 140: samoyeds: 7, cars: 1, trees: 2
Sue 141: children: 6, cats: 5, cars: 9
Sue 142: cats: 0, trees: 1, akitas: 10
Sue 143: samoyeds: 4, cars: 0, children: 7
Sue 144: trees: 0, cars: 4, perfumes: 8
Sue 145: goldfish: 7, cars: 5, trees: 1
Sue 146: perfumes: 7, cars: 7, goldfish: 0
Sue 147: trees: 2, goldfish: 7, vizslas: 5
Sue 148: samoyeds: 8, perfumes: 1, trees: 0
Sue 149: vizslas: 2, samoyeds: 5, trees: 0
Sue 150: akitas: 4, perfumes: 4, pomeranians: 2
Sue 151: trees: 2, cars: 0, goldfish: 10
Sue 152: goldfish: 7, vizslas: 0, trees: 0
Sue 153: children: 9, cats: 0, pomeranians: 10
Sue 154: cars: 6, goldfish: 10, akitas: 5
Sue 155: perfumes: 9, trees: 2, akitas: 3
Sue 156: pomeranians: 9, perfumes: 5, cars: 9
Sue 157: akitas: 0, trees: 2, cars: 7
Sue 158: goldfish: 10, trees: 8, akitas: 7
Sue 159: akitas: 5, trees: 10, cars: 10
Sue 160: akitas: 3, trees: 5, cars: 8
Sue 161: samoyeds: 2, cars: 7, perfumes: 4
Sue 162: cars: 6, vizslas: 10, pomeranians: 5
Sue 163: cars: 10, perfumes: 6, vizslas: 9
Sue 164: pomeranians: 7, cars: 4, vizslas: 2
Sue 165: goldfish: 9, vizslas: 3, trees: 1
Sue 166: goldfish: 1, samoyeds: 3, trees: 1
Sue 167: vizslas: 4, goldfish: 7, cats: 5
Sue 168: children: 1, cars: 5, samoyeds: 7
Sue 169: trees: 1, samoyeds: 3, goldfish: 6
Sue 170: goldfish: 2, cars: 3, perfumes: 9
Sue 171: cars: 4, goldfish: 0, trees: 6
Sue 172: cats: 8, perfumes: 6, trees: 1
Sue 173: akitas: 9, goldfish: 7, cars: 10
Sue 174: vizslas: 2, trees: 0, akitas: 1
Sue 175: perfumes: 3, vizslas: 8, akitas: 4
Sue 176: perfumes: 0, akitas: 6, goldfish: 3
Sue 177: perfumes: 6, children: 1, goldfish: 10
Sue 178: cars: 5, vizslas: 3, children: 10
Sue 179: perfumes: 3, trees: 8, cats: 9
Sue 180: perfumes: 8, vizslas: 4, trees: 7
Sue 181: perfumes: 7, vizslas: 9, samoyeds: 4
Sue 182: vizslas: 9, trees: 4, pomeranians: 4
Sue 183: trees: 9, cars: 3, goldfish: 5
Sue 184: perfumes: 2, cars: 4, vizslas: 3
Sue 185: children: 10, akitas: 10, cats: 9
Sue 186: cars: 5, samoyeds: 0, trees: 0
Sue 187: trees: 2, goldfish: 3, cars: 4
Sue 188: goldfish: 3, vizslas: 1, cats: 6
Sue 189: trees: 2, pomeranians: 10, cars: 7
Sue 190: perfumes: 10, akitas: 3, samoyeds: 0
Sue 191: cats: 5, vizslas: 6, akitas: 6
Sue 192: samoyeds: 5, trees: 1, perfumes: 8
Sue 193: pomeranians: 0, akitas: 9, cats: 0
Sue 194: trees: 1, goldfish: 0, perfumes: 10
Sue 195: perfumes: 2, akitas: 7, cars: 5
Sue 196: perfumes: 5, samoyeds: 8, cars: 1
Sue 197: vizslas: 2, pomeranians: 9, trees: 1
Sue 198: trees: 8, vizslas: 6, children: 8
Sue 199: pomeranians: 4, cars: 7, vizslas: 5
Sue 200: trees: 0, perfumes: 10, akitas: 10
Sue 201: cats: 9, akitas: 4, vizslas: 0
Sue 202: goldfish: 9, pomeranians: 9, cats: 6
Sue 203: cars: 5, perfumes: 5, trees: 2
Sue 204: pomeranians: 7, children: 2, akitas: 6
Sue 205: samoyeds: 7, pomeranians: 7, children: 6
Sue 206: trees: 1, cars: 1, pomeranians: 4
Sue 207: goldfish: 2, perfumes: 5, trees: 0
Sue 208: perfumes: 2, samoyeds: 4, trees: 1
Sue 209: cars: 8, perfumes: 6, goldfish: 9
Sue 210: perfumes: 4, cars: 8, samoyeds: 3
Sue 211: perfumes: 2, cars: 8, trees: 9
Sue 212: trees: 7, perfumes: 2, akitas: 5
Sue 213: children: 3, goldfish: 5, vizslas: 0
Sue 214: akitas: 6, goldfish: 0, children: 0
Sue 215: trees: 8, akitas: 3, goldfish: 1
Sue 216: goldfish: 6, perfumes: 8, akitas: 3
Sue 217: children: 7, trees: 2, vizslas: 6
Sue 218: goldfish: 8, samoyeds: 4, pomeranians: 6
Sue 219: goldfish: 8, samoyeds: 0, children: 9
Sue 220: perfumes: 1, cars: 8, vizslas: 6
Sue 221: perfumes: 9, cars: 10, children: 10
Sue 222: perfumes: 9, vizslas: 1, trees: 0
Sue 223: goldfish: 1, akitas: 2, vizslas: 8
Sue 224: samoyeds: 8, akitas: 7, vizslas: 4
Sue 225: goldfish: 1, cars: 4, perfumes: 10
Sue 226: goldfish: 9, trees: 4, perfumes: 5
Sue 227: vizslas: 5, trees: 4, goldfish: 7
Sue 228: cars: 1, cats: 10, perfumes: 4
Sue 229: vizslas: 8, cars: 10, akitas: 4
Sue 230: cats: 1, children: 8, vizslas: 3
Sue 231: perfumes: 7, cats: 6, samoyeds: 7
Sue 232: cars: 3, children: 9, perfumes: 7
Sue 233: vizslas: 1, samoyeds: 2, children: 2
Sue 234: trees: 1, samoyeds: 8, children: 2
Sue 235: trees: 6, akitas: 9, goldfish: 7
Sue 236: children: 10, trees: 0, samoyeds: 8
Sue 237: pomeranians: 4, trees: 1, goldfish: 2
Sue 238: vizslas: 4, akitas: 2, cars: 0
Sue 239: goldfish: 9, cars: 10, perfumes: 4
Sue 240: perfumes: 3, vizslas: 6, trees: 6
Sue 241: pomeranians: 6, akitas: 4, trees: 2
Sue 242: cars: 8, perfumes: 5, children: 7
Sue 243: trees: 4, perfumes: 7, cars: 3
Sue 244: perfumes: 6, akitas: 1, vizslas: 7
Sue 245: akitas: 3, perfumes: 9, samoyeds: 0
Sue 246: pomeranians: 3, vizslas: 9, samoyeds: 1
Sue 247: cars: 0, goldfish: 7, cats: 2
Sue 248: trees: 5, goldfish: 6, perfumes: 3
Sue 249: trees: 0, pomeranians: 7, perfumes: 9
Sue 250: cars: 9, trees: 1, goldfish: 10
Sue 251: perfumes: 3, cars: 8, trees: 7
Sue 252: cars: 5, akitas: 7, trees: 8
Sue 253: perfumes: 7, akitas: 3, trees: 8
Sue 254: goldfish: 8, samoyeds: 1, vizslas: 7
Sue 255: perfumes: 3, cars: 4, children: 6
Sue 256: perfumes: 9, trees: 8, children: 7
Sue 257: trees: 8, children: 6, cars: 4
Sue 258: vizslas: 1, trees: 10, goldfish: 9
Sue 259: vizslas: 5, trees: 6, goldfish: 9
Sue 260: trees: 0, goldfish: 6, cars: 7
Sue 261: cars: 1, perfumes: 4, goldfish: 9
Sue 262: cars: 7, goldfish: 9, cats: 9
Sue 263: cars: 0, children: 5, goldfish: 8
Sue 264: cars: 2, akitas: 8, trees: 0
Sue 265: perfumes: 9, children: 8, samoyeds: 7
Sue 266: cats: 1, children: 1, vizslas: 10
Sue 267: vizslas: 8, children: 2, trees: 6
Sue 268: akitas: 10, vizslas: 3, cats: 2
Sue 269: children: 4, goldfish: 1, cats: 6
Sue 270: vizslas: 5, cars: 9, akitas: 9
Sue 271: vizslas: 5, children: 4, akitas: 3
Sue 272: cars: 1, goldfish: 0, vizslas: 0
Sue 273: goldfish: 10, samoyeds: 1, akitas: 2
Sue 274: goldfish: 10, children: 2, pomeranians: 0
Sue 275: children: 0, vizslas: 1, samoyeds: 6
Sue 276: children: 1, vizslas: 3, samoyeds: 1
Sue 277: perfumes: 4, cats: 6, children: 10
Sue 278: pomeranians: 7, goldfish: 3, cars: 4
Sue 279: perfumes: 5, goldfish: 9, trees: 7
Sue 280: goldfish: 6, trees: 5, perfumes: 8
Sue 281: cars: 2, akitas: 1, vizslas: 7
Sue 282: vizslas: 4, akitas: 3, children: 8
Sue 283: pomeranians: 8, akitas: 9, vizslas: 4
Sue 284: samoyeds: 10, trees: 10, pomeranians: 2
Sue 285: akitas: 9, perfumes: 7, goldfish: 6
Sue 286: akitas: 2, vizslas: 7, goldfish: 10
Sue 287: pomeranians: 8, cars: 6, samoyeds: 5
Sue 288: pomeranians: 1, trees: 0, goldfish: 0
Sue 289: trees: 10, samoyeds: 1, children: 0
Sue 290: cats: 10, samoyeds: 6, trees: 0
Sue 291: vizslas: 9, trees: 6, goldfish: 5
Sue 292: cats: 4, perfumes: 8, cars: 3
Sue 293: goldfish: 10, perfumes: 10, cats: 0
Sue 294: cats: 7, trees: 6, akitas: 4
Sue 295: vizslas: 8, cars: 1, akitas: 6
Sue 296: vizslas: 5, akitas: 10, trees: 1
Sue 297: pomeranians: 8, samoyeds: 5, vizslas: 4
Sue 298: perfumes: 10, children: 5, vizslas: 2
Sue 299: cars: 10, akitas: 7, cats: 5
Sue 300: trees: 1, perfumes: 7, cars: 7
Sue 301: cars: 9, vizslas: 1, perfumes: 3
Sue 302: perfumes: 9, vizslas: 1, akitas: 5
Sue 303: akitas: 9, trees: 1, goldfish: 10
Sue 304: children: 10, vizslas: 6, pomeranians: 8
Sue 305: trees: 3, goldfish: 6, cats: 9
Sue 306: cars: 5, perfumes: 9, vizslas: 5
Sue 307: children: 0, goldfish: 7, trees: 2
Sue 308: trees: 9, samoyeds: 4, cars: 0
Sue 309: cats: 8, vizslas: 2, perfumes: 3
Sue 310: cars: 6, pomeranians: 6, vizslas: 6
Sue 311: vizslas: 6, akitas: 7, cats: 10
Sue 312: trees: 0, goldfish: 7, cars: 0
Sue 313: perfumes: 5, akitas: 5, cars: 2
Sue 314: akitas: 10, vizslas: 3, samoyeds: 8
Sue 315: cars: 3, perfumes: 1, goldfish: 8
Sue 316: pomeranians: 6, goldfish: 9, perfumes: 1
Sue 317: goldfish: 4, akitas: 6, cars: 2
Sue 318: perfumes: 8, vizslas: 8, akitas: 0
Sue 319: akitas: 10, cars: 5, vizslas: 6
Sue 320: vizslas: 4, akitas: 3, cats: 4
Sue 321: goldfish: 4, akitas: 8, cars: 8
Sue 322: pomeranians: 5, vizslas: 7, cats: 1
Sue 323: perfumes: 1, trees: 6, goldfish: 0
Sue 324: goldfish: 6, trees: 10, cars: 10
Sue 325: akitas: 2, samoyeds: 6, trees: 9
Sue 326: vizslas: 4, akitas: 7, cars: 9
Sue 327: children: 3, perfumes: 4, cars: 1
Sue 328: akitas: 9, perfumes: 6, cars: 10
Sue 329: perfumes: 2, goldfish: 0, trees: 1
Sue 330: vizslas: 10, pomeranians: 7, goldfish: 6
Sue 331: trees: 3, vizslas: 8, cars: 3
Sue 332: akitas: 2, cats: 1, goldfish: 8
Sue 333: cars: 6, trees: 2, vizslas: 0
Sue 334: samoyeds: 7, cars: 7, trees: 3
Sue 335: cats: 7, children: 1, perfumes: 8
Sue 336: akitas: 5, goldfish: 10, vizslas: 5
Sue 337: cats: 3, vizslas: 0, akitas: 10
Sue 338: perfumes: 8, cars: 1, trees: 8
Sue 339: cars: 4, samoyeds: 8, children: 2
Sue 340: goldfish: 9, pomeranians: 1, samoyeds: 1
Sue 341: akitas: 3, trees: 0, goldfish: 2
Sue 342: perfumes: 4, vizslas: 8, pomeranians: 9
Sue 343: akitas: 4, cars: 5, goldfish: 4
Sue 344: samoyeds: 5, cats: 4, trees: 0
Sue 345: samoyeds: 4, cars: 8, akitas: 2
Sue 346: akitas: 3, vizslas: 10, perfumes: 10
Sue 347: goldfish: 10, akitas: 4, cars: 1
Sue 348: perfumes: 10, cats: 4, vizslas: 5
Sue 349: akitas: 2, vizslas: 4, cars: 7
Sue 350: akitas: 5, vizslas: 5, cars: 6
Sue 351: vizslas: 8, perfumes: 6, cars: 3
Sue 352: cars: 10, vizslas: 0, goldfish: 10
Sue 353: cars: 10, perfumes: 5, children: 7
Sue 354: vizslas: 6, akitas: 3, samoyeds: 9
Sue 355: akitas: 2, perfumes: 7, cars: 10
Sue 356: cars: 10, perfumes: 7, children: 6
Sue 357: akitas: 4, cars: 8, trees: 1
Sue 358: trees: 2, cars: 1, goldfish: 2
Sue 359: vizslas: 5, cars: 9, trees: 4
Sue 360: perfumes: 4, akitas: 3, cars: 3
Sue 361: children: 3, akitas: 2, cats: 5
Sue 362: cars: 8, cats: 4, akitas: 10
Sue 363: cats: 2, trees: 1, vizslas: 4
Sue 364: vizslas: 2, pomeranians: 5, samoyeds: 9
Sue 365: samoyeds: 2, akitas: 7, goldfish: 9
Sue 366: goldfish: 8, trees: 7, cats: 2
Sue 367: perfumes: 2, vizslas: 6, trees: 5
Sue 368: cars: 5, samoyeds: 0, perfumes: 6
Sue 369: samoyeds: 10, trees: 10, vizslas: 1
Sue 370: trees: 2, vizslas: 3, cars: 4
Sue 371: akitas: 6, pomeranians: 2, cats: 4
Sue 372: trees: 2, perfumes: 3, goldfish: 9
Sue 373: vizslas: 5, children: 0, pomeranians: 6
Sue 374: trees: 1, vizslas: 8, perfumes: 10
Sue 375: cars: 0, akitas: 6, children: 0
Sue 376: akitas: 1, vizslas: 0, trees: 0
Sue 377: samoyeds: 10, cats: 5, pomeranians: 0
Sue 378: goldfish: 3, pomeranians: 7, cats: 7
Sue 379: perfumes: 0, cats: 0, trees: 8
Sue 380: perfumes: 4, samoyeds: 1, akitas: 7
Sue 381: akitas: 4, pomeranians: 2, children: 4
Sue 382: vizslas: 9, akitas: 4, trees: 10
Sue 383: trees: 1, vizslas: 10, akitas: 6
Sue 384: trees: 3, akitas: 8, goldfish: 3
Sue 385: goldfish: 6, perfumes: 2, children: 9
Sue 386: children: 10, akitas: 7, goldfish: 7
Sue 387: goldfish: 3, vizslas: 10, perfumes: 5
Sue 388: children: 4, trees: 0, cars: 2
Sue 389: trees: 0, cats: 3, goldfish: 10
Sue 390: samoyeds: 9, pomeranians: 0, cats: 6
Sue 391: samoyeds: 10, trees: 3, akitas: 4
Sue 392: akitas: 9, goldfish: 10, perfumes: 7
Sue 393: goldfish: 6, cars: 2, akitas: 9
Sue 394: trees: 4, goldfish: 9, vizslas: 7
Sue 395: vizslas: 4, samoyeds: 1, goldfish: 6
Sue 396: vizslas: 5, cats: 0, samoyeds: 1
Sue 397: goldfish: 7, cats: 0, trees: 7
Sue 398: cars: 10, akitas: 1, vizslas: 7
Sue 399: samoyeds: 10, cats: 6, goldfish: 6
Sue 400: cats: 6, samoyeds: 0, trees: 2
Sue 401: trees: 1, children: 4, goldfish: 2
Sue 402: cats: 8, vizslas: 4, children: 3
Sue 403: cars: 9, perfumes: 8, pomeranians: 2
Sue 404: goldfish: 8, trees: 2, cars: 5
Sue 405: perfumes: 1, pomeranians: 5, vizslas: 5
Sue 406: perfumes: 6, trees: 2, pomeranians: 6
Sue 407: trees: 0, goldfish: 6, cars: 6
Sue 408: trees: 0, samoyeds: 7, goldfish: 9
Sue 409: samoyeds: 10, goldfish: 6, pomeranians: 0
Sue 410: perfumes: 5, vizslas: 6, trees: 0
Sue 411: goldfish: 2, trees: 2, pomeranians: 0
Sue 412: pomeranians: 4, perfumes: 8, cats: 8
Sue 413: vizslas: 4, cars: 5, akitas: 1
Sue 414: perfumes: 2, trees: 8, goldfish: 7
Sue 415: akitas: 3, trees: 1, perfumes: 3
Sue 416: cars: 7, trees: 1, perfumes: 8
Sue 417: cars: 5, goldfish: 5, trees: 1
Sue 418: cars: 9, goldfish: 4, samoyeds: 2
Sue 419: pomeranians: 8, akitas: 1, goldfish: 6
Sue 420: cars: 0, cats: 0, children: 8
Sue 421: akitas: 10, goldfish: 1, vizslas: 8
Sue 422: children: 8, vizslas: 6, samoyeds: 10
Sue 423: samoyeds: 3, goldfish: 10, vizslas: 8
Sue 424: cars: 3, children: 7, goldfish: 4
Sue 425: cars: 9, perfumes: 9, goldfish: 8
Sue 426: akitas: 5, trees: 10, vizslas: 10
Sue 427: vizslas: 10, cars: 3, akitas: 7
Sue 428: cats: 6, perfumes: 5, goldfish: 10
Sue 429: goldfish: 7, trees: 5, vizslas: 10
Sue 430: perfumes: 3, trees: 7, cars: 3
Sue 431: cars: 2, vizslas: 1, akitas: 6
Sue 432: pomeranians: 8, perfumes: 5, cars: 3
Sue 433: children: 8, cars: 0, perfumes: 7
Sue 434: samoyeds: 0, vizslas: 9, akitas: 10
Sue 435: akitas: 3, vizslas: 8, cats: 4
Sue 436: goldfish: 5, trees: 8, samoyeds: 8
Sue 437: cars: 10, samoyeds: 9, goldfish: 7
Sue 438: samoyeds: 5, akitas: 7, perfumes: 9
Sue 439: goldfish: 10, perfumes: 5, cars: 0
Sue 440: pomeranians: 1, samoyeds: 9, children: 4
Sue 441: vizslas: 4, perfumes: 2, cats: 5
Sue 442: trees: 0, pomeranians: 3, cars: 7
Sue 443: akitas: 0, cars: 2, vizslas: 10
Sue 444: children: 1, akitas: 9, trees: 0
Sue 445: cars: 5, perfumes: 7, goldfish: 9
Sue 446: akitas: 0, perfumes: 1, vizslas: 2
Sue 447: vizslas: 7, perfumes: 0, cars: 5
Sue 448: vizslas: 6, goldfish: 10, trees: 0
Sue 449: cars: 7, vizslas: 7, trees: 3
Sue 450: pomeranians: 4, akitas: 4, vizslas: 8
Sue 451: cats: 4, perfumes: 8, children: 3
Sue 452: samoyeds: 8, akitas: 9, cars: 1
Sue 453: cars: 8, akitas: 5, vizslas: 2
Sue 454: vizslas: 9, perfumes: 4, akitas: 4
Sue 455: akitas: 3, goldfish: 2, vizslas: 6
Sue 456: cars: 4, perfumes: 5, goldfish: 10
Sue 457: trees: 9, pomeranians: 4, goldfish: 10
Sue 458: pomeranians: 1, perfumes: 9, children: 6
Sue 459: samoyeds: 0, goldfish: 8, vizslas: 6
Sue 460: cars: 10, goldfish: 8, samoyeds: 8
Sue 461: akitas: 8, goldfish: 9, vizslas: 2
Sue 462: cars: 1, vizslas: 2, akitas: 8
Sue 463: goldfish: 2, akitas: 4, samoyeds: 10
Sue 464: children: 5, perfumes: 5, cars: 5
Sue 465: perfumes: 9, trees: 0, samoyeds: 6
Sue 466: akitas: 5, goldfish: 3, cats: 6
Sue 467: perfumes: 3, goldfish: 0, trees: 4
Sue 468: goldfish: 2, children: 4, trees: 1
Sue 469: cars: 0, perfumes: 8, children: 7
Sue 470: vizslas: 8, cats: 5, samoyeds: 9
Sue 471: pomeranians: 7, trees: 2, goldfish: 3
Sue 472: goldfish: 8, akitas: 4, perfumes: 5
Sue 473: perfumes: 2, pomeranians: 3, cars: 8
Sue 474: samoyeds: 0, akitas: 7, pomeranians: 6
Sue 475: vizslas: 7, perfumes: 1, trees: 6
Sue 476: vizslas: 3, samoyeds: 1, perfumes: 10
Sue 477: cars: 6, perfumes: 5, vizslas: 2
Sue 478: pomeranians: 1, goldfish: 3, akitas: 7
Sue 479: goldfish: 10, trees: 0, cars: 3
Sue 480: cats: 3, akitas: 5, vizslas: 8
Sue 481: pomeranians: 5, vizslas: 2, trees: 3
Sue 482: cars: 8, samoyeds: 10, goldfish: 10
Sue 483: pomeranians: 3, vizslas: 6, goldfish: 5
Sue 484: perfumes: 7, vizslas: 4, akitas: 7
Sue 485: goldfish: 1, trees: 0, perfumes: 10
Sue 486: goldfish: 6, perfumes: 0, akitas: 10
Sue 487: cats: 2, akitas: 10, trees: 1
Sue 488: akitas: 1, goldfish: 3, cars: 7
Sue 489: goldfish: 3, akitas: 6, vizslas: 6
Sue 490: goldfish: 8, perfumes: 2, akitas: 2
Sue 491: trees: 4, vizslas: 8, perfumes: 6
Sue 492: cars: 9, perfumes: 3, cats: 0
Sue 493: trees: 3, vizslas: 6, goldfish: 7
Sue 494: trees: 8, samoyeds: 1, perfumes: 5
Sue 495: children: 9, akitas: 8, vizslas: 4
Sue 496: vizslas: 2, pomeranians: 1, perfumes: 7
Sue 497: trees: 2, akitas: 4, vizslas: 6
Sue 498: akitas: 8, pomeranians: 7, trees: 0
Sue 499: perfumes: 6, goldfish: 3, vizslas: 7
Sue 500: cars: 1, perfumes: 6, vizslas: 1
`

const message = `
children: 3
cats: 7
samoyeds: 2
pomeranians: 3
akitas: 0
vizslas: 0
goldfish: 5
trees: 3
cars: 2
perfumes: 1
`


// Code 

const aunts = input.trim().split('\n').map((line) => {
    const row = line.split(' ').map(
        word => word.replace(',', '').replace(':', '')
    )

    const name = row[0] +  ' ' + row[1]
    const number = Number(row[1])
    const props = []

    for (let i = 2; i + 1 < row.length; i += 2) {
        props.push([row[i], Number(row[i + 1])])
    }

    return { name: name, number: number, props: new Map(props) }
})

const list = message.trim().split('\n').map((line) => {
    var l = line.split(': ')
    l[1] = Number(l[1])
    return l
})

const printAunts = (arr, limit = 0) => {
    for (let i = 0; i < arr.length; i++) {
        if (i >= limit && limit != 0) {
            console.log('...')
            break
        }
        const aunt = arr[i]
        let str = `${aunt.name}:`
        for (let k of aunt.props.keys()) {
            str += `\n - ${k}: ${aunt.props.get(k)}`
        }
        console.log(str)
    }
}

const printList = (arr, limit = 0) => {
    let str = 'List:'
    for (let i = 0; i < arr.length; i++) {
        if (i >= limit && limit != 0) {
            console.log('...')
            break
        }
        str += `\n - ${arr[i][0]}: ${arr[i][1]}` 
    }
    console.log(str)
}

const matchAunt = (aunts, list) => {
    for (let aunt of aunts) {
        let match = true
        for (let el of list) {
            const [prop, val] = el
            if (aunt.props.has(prop)) {
                const auntVal = aunt.props.get(prop)
                if (prop === 'cats' || prop === 'trees') {
                    if (auntVal <= val) {
                        match = false
                        break
                    }
                } else if (prop === 'pomeranians' || prop === 'goldfish') {
                    if (auntVal >= val) {
                        match = false
                        break
                    }
                } else {
                    if (auntVal !== val) {
                        match = false
                        break
                    }
                }
            }
        }
        if (match) return aunt
    }
    return null
}


// Results

printAunts(aunts, 3)
console.log()
printList(list)
console.log()
console.log('Matching aunt:', matchAunt(aunts, list)?.name || 'none')