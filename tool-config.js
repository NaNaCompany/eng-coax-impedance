export const tool={
  "id": "E148",
  "slug": "eng-coax-impedance",
  "title": "동축선 특성임피던스 계산기",
  "title_en": "Coaxial Characteristic Impedance Calculator",
  "category": "RF·전송선",
  "category_en": "RF and transmission lines",
  "fields": [
    {
      "key": "a",
      "label": "내부 도체의 바깥 반지름 a",
      "label_en": "Outer radius of the inner conductor a",
      "dimension": "length",
      "example": 0.0005,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "0.5"
    },
    {
      "key": "b",
      "label": "외부 도체의 안쪽 반지름 b",
      "label_en": "Inner radius of the outer conductor b",
      "dimension": "length",
      "example": 0.002,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "2"
    },
    {
      "key": "er",
      "label": "유전체의 상대 유전율 εr",
      "label_en": "Relative dielectric permittivity εr",
      "dimension": "ratio",
      "example": 2.25,
      "constraint": "positive",
      "display_unit": "1",
      "display_value": "2.25"
    },
    {
      "key": "mur",
      "label": "유전체의 상대 투자율 μr",
      "label_en": "Relative dielectric permeability μr",
      "dimension": "ratio",
      "example": 1,
      "constraint": "positive",
      "display_unit": "1",
      "display_value": "1"
    }
  ],
  "result_label": "특성임피던스 Z₀",
  "result_label_en": "Characteristic impedance Z₀",
  "result_dimension": "resistance",
  "formula": "Z₀ = [√(μ₀μr/(ε₀εr))/(2π)] ln(b/a)",
  "purpose": "동심 원통형 동축선의 도체 반지름과 균일 유전체 특성으로 무손실 TEM 특성임피던스 계산.",
  "purpose_en": "Calculate the lossless TEM characteristic impedance of a concentric coaxial line from its conductor radii and uniform dielectric properties.",
  "assumptions": "완전 도체, 동심 원통 형상, 균일하고 선형인 유전체, 무손실 TEM 전파를 가정합니다. a와 b는 모두 반지름입니다. a는 내부 도체의 바깥 경계, b는 외부 도체의 안쪽 경계이며 b > a여야 합니다. 표피효과·도체 손실·유전체 손실·분산·고차 모드·편심은 제외합니다. 특성임피던스는 케이블의 직류 저항이나 유한 길이 입력임피던스가 아닙니다.",
  "assumptions_en": "Required: perfect concentric cylindrical conductors, a uniform linear dielectric and lossless TEM propagation. Both dimensions are radii: a is the outer surface of the inner conductor and b is the inner surface of the shield, with b > a. Excluded: skin effect, conductor and dielectric loss, dispersion, higher modes and eccentricity. Characteristic impedance differs from DC resistance and the input impedance of a finite cable.",
  "sources": [
    {
      "label": "MIT · Electromagnetic Fields and Energy, coaxial TEM line problems 14.2.1 and 14.3.1",
      "url": "https://web.mit.edu/6.013_book/www/chapter14/14.prob.html"
    }
  ],
  "condition": "동심·균일 유전체·무손실 TEM 조건과 반지름 경계를 확인했습니다.",
  "condition_en": "I have checked concentric geometry, uniform dielectric, lossless TEM operation and the radius definitions.",
  "site": "https://nanalab.kr/eng-coax-impedance/",
  "repository": "https://github.com/NaNaCompany/eng-coax-impedance",
  "groups": [],
  "output_unit": "ohm"
};
