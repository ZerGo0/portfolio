import { base } from '$app/paths';
import { theme } from '$lib/stores/theme';
import type { Asset } from '$lib/types';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string, black?: boolean): Asset =>
  dark || black ? { dark: gh(dark || light), light: gh(light), black: black ?? false } : gh(light);

const Assets = {
  AWS: a('aws.svg'),
  Bootstrap: a('bootstrap.svg'),
  C: a('c.svg'),
  Cpp: a('cpp.svg'),
  Celery: a('celery.svg'),
  Django: a('django.svg'),
  FastApi: a('fastapi'),
  Flask: a('flask.svg'),
  Go: a('go.svg'),
  Kafka: a('kafka.svg'),
  Neo4j: a('neo4j.svg'),
  Nginx: a('nginx.svg'),
  Numpy: a('numpy.svg'),
  Pandas: a('pandas.svg'),
  RabbitMQ: a('rabbitmq.svg'),
  Rust: a('rust.svg', 'rust-dark.png'),
  Scrapy: a('scrapy.png'),
  Selenium: a('selenium.svg'),
  Docker: a('docker.svg'),
  Kubernetes: a('kubernetes.svg'),
  Csharp: a('csharp.svg'),
  Xamarin: a('xamarin.svg'),
  TypeScript: a('ts.png'),
  VueJs: a('vue.png'),
  ReactJs: a('react.svg'),
  Dart: a('dart.png'),
  Kotlin: a('kotlin.png'),
  Python: a('python.png'),
  NodeJs: a('node.png'),
  Deno: a('deno.png', 'deno-dark.png'),
  Svelte: a('svelte.png'),
  ExpressJs: a('express.png'),
  JavaScript: a('js.png'),
  Fastify: a('fastify.svg', 'fastify-dark.png'),
  NestJs: a('nest.svg'),
  Quasar: a('quasar.svg'),
  SolidJs: a('solid.svg'),
  Electron: a('electron.png'),
  Flutter: a('flutter.svg'),
  Java: a('java.png'),
  AdonisJs: a('adonis.png'),
  Android: a('android.png'),
  Angular: a('angular.png'),
  PostgreSQL: a('postgres.png'),
  Firebase: a('firebase.png'),
  Sass: a('sass.png'),
  Unknown: a('no-img.svg'),
  MongoDB: a('mongodb.svg'),
  Redis: a('redis.svg'),
  Tailwind: a('tailwind.svg'),
  HTML: a('html.svg'),
  Premiere: a('premiere.svg'),
  Photoshop: a('photoshop.svg'),
  CSS: a('css.svg'),
  AfterEffects: a('after-effects.svg'),
  Illustrator: a('illustrator.svg'),
  Nuxt: a('nuxt.png'),
  Vite: a('vite.png'),
  Vitest: a('vitest.svg'),
  Jest: a('jest.png'),
  Unocss: a('unocss.svg'),
  Ruvy: a('ruvy.svg'),
  Postcss: a('postcss.svg'),
  DotNet: a('dotnet.svg'),
  MSSQL: a('mssql.svg'),
  AzurePipelines: a('azure-pipelines.svg', undefined, true),
  AzureDevOps: a('azure-devops.svg'),
  ForSellers: a('4sellers.png'),
  NAT: a('nat.png'),
  DotTrace: a('dottrace.svg'),
  DotMemory: a('dotmemory.png'),
  MySql: a('mysql.svg'),
  GithubActions: a('github-actions.svg', undefined, true),
  Cloudflare: a('cloudflare.svg'),
  Less: a('less.svg'),
  NextJs: a('nextjs.svg', undefined, true),
  Stripe: a('stripe.svg', undefined, true),
  Supabase: a('supabase.svg', undefined, true),
  Drizzle: a('drizzle.svg', undefined, true),
  Resend: a('resend.svg', undefined, true),
  Vercel: a('vercel.svg', undefined, true),
  Wishly: a('wishly.svg')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
  return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};

export const isBlackAsset = (asset: Asset): boolean => {
  return typeof asset === 'string' ? false : asset.black;
};
