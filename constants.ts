import { Project, SkillMetric, SkillCategory } from './types';
import { Smartphone, Zap, Database, Layout, BarChart3 } from 'lucide-react';

export const HERO_DATA = {
  name: "Android Engineer",
  summary: "1,000만 다운로드 글로벌 차량 관리 앱의 핵심 기능을 주도했습니다. 복잡한 제조사 데이터를 표준화하고, 레거시 시스템을 Jetpack Compose와 최신 아키텍처로 현대화하며 비즈니스 성장을 견인했습니다.",
};

export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'Architecture', A: 90, fullMark: 100 },
  { subject: 'Jetpack Compose', A: 95, fullMark: 100 },
  { subject: 'Performance', A: 85, fullMark: 100 },
  { subject: 'Async/Flow', A: 90, fullMark: 100 },
  { subject: 'Legacy Migration', A: 85, fullMark: 100 },
  { subject: 'Android Auto', A: 80, fullMark: 100 },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Kotlin", "Java"]
  },
  {
    category: "UI & Architecture",
    skills: ["Jetpack Compose", "XML", "MVVM", "Repository Pattern", "MVI (Orbit)", "Clean Architecture"]
  },
  {
    category: "Asynchronous",
    skills: ["Coroutines", "Flow", "RxJava3", "CompletableFuture"]
  },
  {
    category: "Data Management",
    skills: ["Room (SQLite)", "DataStore", "SharedPreferences", "Firebase Remote Config"]
  },
  {
    category: "Platform & Tools",
    skills: ["Android Auto (Car App Lib)", "Foreground Service", "AdMob Mediation", "Git", "CI/CD"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "프리셋 대시보드 시스템 개발",
    period: "2024.01 ~ 2024.06",
    role: "Lead Developer",
    techStack: ["Jetpack Compose", "Kotlin", "DataStore", "MVVM", "Flow", "BuildConfig"],
    situation: "기존 OBD-II 표준 데이터만 지원하던 대시보드의 한계를 극복하고, 현대/기아 등 제조사별 확장 데이터와 다양한 연료 타입(EV, 수소차 등)을 지원해야 했습니다.",
    task: "68개 대시보드 항목의 Single Source of Truth 설계 및 Jetpack Compose 기반의 동적 필터링 UI 구현.",
    action: [
      "**문제: 제조사별 데이터 복잡성** - 68개 항목이 연료 타입, 페이지, 단위에 따라 다르게 표시되어야 하는 복잡성 발생.\n**해결:** `DashboardConfig` object를 설계하여 모든 설정을 중앙 집중 관리하고, `ItemConfig` 데이터 클래스로 유연성 확보.",
      "**문제: 앱 간 설정 저장소 분리** - Infocar와 InfocarBiz 앱이 동일 코드를 공유하지만 저장 방식이 달라야 함.\n**해결:** `IDashboardDataStore` 인터페이스를 추출하고 `BuildConfig` 분기 처리를 통해 의존성 주입 구조 설계.",
      "**문제: 불필요한 렌더링** - 연료 타입별로 불필요한 항목이 UI에 로드됨.\n**해결:** 5개 연료 타입(가솔린, 디젤, EV 등)에 따른 동적 필터링 로직을 구현하여 메모리 사용량 최적화."
    ],
    result: [
      "제조사 데이터 프로파일 지원 차량 500개+ 모델 커버리지 확보",
      "연료 타입별 동적 필터링으로 불필요한 UI 항목 90% 제거",
      "Jetpack Compose 도입으로 기존 XML 대비 UI 코드량 40% 감소"
    ],
    highlightColor: "emerald"
  },
  {
    id: "p2",
    title: "차계부 시스템 리뉴얼",
    period: "2022.10 ~ 2023.06",
    role: "Core Developer",
    techStack: ["SQLite", "Fragment", "ViewBinding", "Custom View", "File I/O"],
    situation: "레거시 차계부의 UX 불편함과 데이터 파편화로 인해 사용자 이탈이 발생했으며, 주유/정비/세차 기록의 통합 관리 및 서버 동기화가 필요했습니다.",
    task: "5개 테이블(주유, 정비 등) 정규화 DB 설계 및 커스텀 키패드/영수증 관리 기능 구현.",
    action: [
      "**문제: 입력 피드백 부재** - 자릿수 초과 시 사용자 인지가 어려움.\n**해결:** 텍스트 흔들림 애니메이션과 햅틱(Haptic) 피드백을 결합한 `CarBookRecordFragment` 커스텀 키패드 로직 구현.",
      "**문제: 데이터 불일치** - 빠른 스크롤과 필터 변경 시 리스트 포지션 오류 발생.\n**해결:** 비동기 작업 후 콜백을 통해 Position을 재설정하는 로직으로 리팩토링.",
      "**문제: 파일 잔존 이슈** - 영수증 삭제 시 DB만 삭제되고 이미지 파일이 남음.\n**해결:** `PictureManager`를 구현하여 DB 트랜잭션과 파일 시스템 삭제 작업을 원자적으로 처리."
    ],
    result: [
      "사용자 입력 단계 40% 감소 (3단계 → 2단계)로 UX 개선",
      "5개 테이블 정규화 설계로 데이터 무결성 100% 확보",
      "이미지 압축 알고리즘 적용으로 업로드 용량 70% 절감"
    ],
    highlightColor: "blue"
  },
  {
    id: "p3",
    title: "Android Auto 연동 서비스",
    period: "2024.10 ~ 2025.02",
    role: "Feature Owner",
    techStack: ["Car App Library", "Foreground Service", "Handler", "ScreenManager"],
    situation: "운전 중 스마트폰 조작 없이 차량 디스플레이에서 데이터를 확인하고자 하는 니즈가 증가했습니다.",
    task: "Car App Library 기반 아키텍처 설계 및 모바일 앱과 차량 화면 간의 실시간 데이터 동기화 구현.",
    action: [
      "**문제: 서비스 타임아웃 ANR** - Android 12+에서 Foreground Service 시작 시 5초 제한으로 인한 크래시.\n**해결:** `startForeground`를 권한 체크보다 먼저 호출하여 서비스 안정성을 최우선으로 확보하는 방어적 코드 적용.",
      "**문제: 화면 동기화 지연** - 앱 내 화면 전환이 차량 디스플레이에 즉시 반영되지 않음.\n**해결:** `Handler` 기반 메시지 패싱과 `ScreenManager`를 활용하여 앱↔Auto 간 상태 100% 동기화.",
      "**문제: 데이터 요청 충돌** - ECU 서칭 중 대시보드 접근 시 Null 참조 발생.\n**해결:** 프로토콜 상태를 체크하는 `isAllow()` 메서드로 안전하지 않은 시점의 데이터 요청 차단."
    ],
    result: [
      "Google Android Auto 공식 인증 획득 및 서비스 런칭",
      "Foreground Service 관련 ANR 리포트 80% 감소",
      "운전자 안전 가이드라인을 준수하는 UX/UI 구축"
    ],
    highlightColor: "indigo"
  },
  {
    id: "p4",
    title: "글로벌 광고 미디에이션 시스템",
    period: "2025.03 ~ 2025.05",
    role: "System Engineer",
    techStack: ["AdMob Mediation", "Yandex Ads SDK", "CompletableFuture", "Custom Adapter"],
    situation: "AdMob 단일 네트워크 의존으로 인한 수익 한계와 러시아/CIS 지역의 낮은 광고 도달률을 해결해야 했습니다.",
    task: "4개 네트워크(AdMob, Yandex 등) 통합 미디에이션 설계 및 GDPR 컴플라이언스 적용.",
    action: [
      "**문제: UI 깨짐 현상** - 세로 비율 동영상 광고가 카드 UI 영역을 침범.\n**해결:** 광고 로드 시 Aspect Ratio를 사전 검사하여 세로 비율일 경우 재요청(Retry Policy)하는 로직 구현.",
      "**문제: 앱 진입 지연** - 네트워크 지연 시 스플래시 화면에서 무한 로딩.\n**해결:** `CompletableFuture`와 10초 타임아웃 스케줄러를 적용하여 광고 로드 실패 시에도 3초 이내 앱 진입 보장.",
      "**문제: 미지원 네트워크** - Yandex 네트워크가 AdMob 기본 어댑터를 지원하지 않음.\n**해결:** `YandexNativeEventLoader` 등 커스텀 이벤트 어댑터를 직접 개발하여 연동."
    ],
    result: [
      "러시아/CIS 지역 광고 수익 40% 증가 및 Fill Rate 25% 향상",
      "스플래시 광고 타임아웃 처리로 앱 진입 경험 개선",
      "GDPR/CCPA 대응으로 글로벌 서비스 법적 리스크 해소"
    ],
    highlightColor: "orange"
  },
  {
    id: "p5",
    title: "법인 차량 배차 관리 (InfocarBiz)",
    period: "2025.07 ~ 2025.08",
    role: "Frontend Engineer",
    techStack: ["Jetpack Compose", "Paging 3", "StateFlow", "Coroutines", "MVVM"],
    situation: "법인 차량 관리 앱에서 배차 신청/승인 프로세스의 실시간 동기화와 대량의 데이터 처리가 필요했습니다.",
    task: "MVVM + Repository 패턴 기반의 배차 관리 모듈 개발 및 페이징 시스템 구축.",
    action: [
      "**문제: 중복 API 호출** - 빠른 스크롤 시 페이징 요청이 중복 발생.\n**해결:** `loadDispatchData` 함수 진입 시점에 `isLoading` 플래그를 즉시 체크하여 원천 차단.",
      "**문제: 페이징 상태 불일치** - 필터 변경 후에도 이전 페이지 상태가 유지됨.\n**해결:** 필터 적용 시 `currentPage`와 `hasNextPage`를 초기화하는 로직을 추가하여 데이터 무결성 확보.",
      "**문제: 상태 동기화** - 관리자와 사용자 간 승인 상태 시차 발생.\n**해결:** `StateFlow` 기반의 반응형 UI 설계로 데이터 변경 즉시 화면 갱신."
    ],
    result: [
      "배차 신청/승인 프로세스 100% 디지털화",
      "Paging 3(20건 단위) 적용으로 대용량 리스트 스크롤 성능 확보",
      "상태 기반 UI(StateFlow)로 사용자 경험 개선"
    ],
    highlightColor: "purple"
  }
];

export const ICONS_MAP = {
  mobile: Smartphone,
  fast: Zap,
  data: Database,
  ui: Layout,
  chart: BarChart3
};