# 동축선 특성임피던스 계산기

동심 원통형 동축선의 도체 반지름과 균일 유전체 특성으로 무손실 TEM 특성임피던스 계산.

- ID: E148
- App: https://nanalab.kr/eng-coax-impedance/
- Repository: https://github.com/NaNaCompany/eng-coax-impedance
- Formula: Z₀ = [√(μ₀μr/(ε₀εr))/(2π)] ln(b/a)

## Model and data

완전 도체, 동심 원통 형상, 균일하고 선형인 유전체, 무손실 TEM 전파를 가정합니다. a와 b는 모두 반지름입니다. a는 내부 도체의 바깥 경계, b는 외부 도체의 안쪽 경계이며 b > a여야 합니다. 표피효과·도체 손실·유전체 손실·분산·고차 모드·편심은 제외합니다. 특성임피던스는 케이블의 직류 저항이나 유한 길이 입력임피던스가 아닙니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
