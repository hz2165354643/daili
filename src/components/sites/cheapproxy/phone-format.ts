const CALLING_CODES = new Set(
  `1,7,20,27,30,31,32,33,34,36,39,40,41,43,44,45,46,47,48,49,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,81,82,84,86,90,91,92,93,94,95,98,211,212,213,216,218,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,260,261,262,263,264,265,266,267,268,269,290,291,297,298,299,350,351,352,353,354,355,356,357,358,359,370,371,372,373,374,375,376,377,378,379,380,381,382,383,385,386,387,389,420,421,423,500,501,502,503,504,505,506,507,508,509,590,591,592,593,594,595,596,597,598,599,670,672,673,674,675,676,677,678,679,680,681,682,683,685,686,687,688,689,690,691,692,850,852,853,855,856,880,886,960,961,962,963,964,965,966,967,968,970,971,972,973,974,975,976,977,992,993,994,995,996,998`.split(
    ",",
  ),
);

function resolveCallingCode(digits: string): string | null {
  const max = Math.min(3, digits.length);
  for (let length = max; length >= 1; length -= 1) {
    const prefix = digits.slice(0, length);
    if (!CALLING_CODES.has(prefix)) continue;
    if (digits.length === length) {
      const couldGrow = [...CALLING_CODES].some(
        (code) => code.length > length && code.startsWith(prefix),
      );
      if (couldGrow) return null;
    }
    return prefix;
  }
  return null;
}

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 15);
  if (!digits) return raw.includes("+") ? "+" : "";
  const code = resolveCallingCode(digits);
  if (!code) return `+${digits}`;
  const national = digits.slice(code.length);
  return national ? `+${code} ${national}` : `+${code}`;
}

const NATIONAL_LENGTH: Record<string, readonly [number, number]> = {
  "1": [10, 10],
  "7": [10, 10],
  "20": [10, 10],
  "27": [9, 9],
  "30": [10, 10],
  "31": [9, 9],
  "32": [8, 9],
  "33": [9, 9],
  "34": [9, 9],
  "36": [8, 9],
  "39": [9, 11],
  "41": [9, 9],
  "43": [10, 13],
  "44": [10, 10],
  "46": [7, 13],
  "47": [8, 8],
  "48": [9, 9],
  "49": [10, 11],
  "55": [10, 11],
  "60": [9, 10],
  "61": [9, 9],
  "62": [9, 12],
  "63": [10, 10],
  "64": [8, 10],
  "65": [8, 8],
  "66": [9, 9],
  "81": [10, 11],
  "82": [9, 11],
  "84": [9, 10],
  "86": [11, 11],
  "90": [10, 10],
  "91": [10, 10],
  "92": [10, 10],
  "94": [9, 9],
  "95": [8, 10],
  "98": [10, 10],
  "852": [8, 8],
  "853": [8, 8],
  "886": [9, 9],
  "966": [9, 9],
  "971": [9, 9],
  "972": [8, 9],
};

export function isCompletePhone(value: string): boolean {
  const match = /^\+(\d{1,3}) (\d+)$/.exec(value);
  if (!match) return false;
  const [, code, national] = match;
  if (!CALLING_CODES.has(code) || code.length + national.length > 15) return false;
  const [min, max] = NATIONAL_LENGTH[code] ?? [8, 12];
  return national.length >= min && national.length <= max;
}

export function caretFromDigits(formatted: string, digitCount: number): number {
  if (digitCount <= 0) return formatted.startsWith("+") ? 1 : 0;
  let seen = 0;
  for (let index = 0; index < formatted.length; index += 1) {
    if (/\d/.test(formatted[index] ?? "")) {
      seen += 1;
      if (seen === digitCount) return index + 1;
    }
  }
  return formatted.length;
}
