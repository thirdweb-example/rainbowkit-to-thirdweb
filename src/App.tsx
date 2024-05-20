import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Fragment } from "react/jsx-runtime";

export default function App() {
  return (
    <div className="flex flex-col py-12 px-2">
      <div className="mx-auto">
        <div className="mx-auto text-center text-lg lg:text-4xl">
          This tool helps you migrate from Rainbowkit to thirdweb SDK
        </div>
        <div className="text-center mt-3">
          Build your own wallet connect modal with{" "}
          <a
            target="_blank"
            href="https://thirdweb.com/dashboard/connect/playground"
            className="font-bold underline text-purple-600"
          >
            thirdweb Playground
          </a>
        </div>
        {data.map((item) => (
          <Fragment key={item.title}>
            <div className="text-lg font-bold mt-12">{item.title}</div>
            <hr />
            <div className="flex lg:flex-row flex-col justify-between gap-5">
              <div className="flex flex-col">
                <div className="mx-auto">Rainbowkit</div>
                <CodeSnippet
                  code={item.rainbowkit}
                  language={item.language || "typescript"}
                />
              </div>
              <div className="flex flex-col">
                <div className="mx-auto">thirdweb SDK</div>
                <CodeSnippet
                  code={item.thirdweb}
                  language={item.language || "typescript"}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

const CodeSnippet = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  return (
    <SyntaxHighlighter
      className="w-[92vw] lg:w-[500px] overflow-auto p-2 max-h-[400px]"
      PreTag="div"
      children={String(code).replace(/\n$/, "")}
      language={language}
      style={materialDark}
    />
  );
  return (
    <pre className="bg-gray-900 text-white w-[92vw] lg:w-[500px] overflow-auto p-2 max-h-[400px]">
      {code}
    </pre>
  );
};

type CodeItem = {
  title: string;
  rainbowkit: string;
  thirdweb: string;
  language?: string | "typescript";
};

const data: CodeItem[] = [
  {
    title: "Installation",
    rainbowkit:
      "npm install @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query",
    thirdweb: "npm install thirdweb",
    language: "bash",
  },
  {
    title: "Initialization",
    rainbowkit: `import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {/* Your App */}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};`,
    thirdweb: `import { ThirdwebProvider } from "thirdweb/react";
  
const App = () => {
  return (
    <ThirdwebProvider>
      {/* Your App */}
    </ThirdwebProvider>
  );
};`,
  },
  {
    title: "Connect wallet button",
    rainbowkit: `import { ConnectButton } from '@rainbow-me/rainbowkit';

export const YourApp = () => {
  return <ConnectButton />;
};`,
    thirdweb: `import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({ clientId: "your-client-id" });

export const YourApp = () => {
  return <ConnectButton client={client} />
}`,
  },
  {
    title: "Localization",
    rainbowkit: `<RainbowKitProvider 
  locale="zh-CN" 
  {...etc}>
  {/* Your App */}
</RainbowKitProvider>`,
    thirdweb: `<ConnectButton
  locale={"es-ES"}
  {...etc}
/>`,
  },
  {
    title: "Modal sizes",
    rainbowkit: `<RainbowKitProvider 
  modalSize="compact" 
  {...etc}>
  {/* Your App */}
</RainbowKitProvider>`,
    thirdweb: `<ConnectButton
  connectModal={{ size: "compact" }}
  {...etc}
/>`,
  },
  {
    title: "Localization",
    rainbowkit: `<RainbowKitProvider 
  locale="zh-CN" 
  {...etc}>
  {/* Your App */}
</RainbowKitProvider>`,
    thirdweb: `<ConnectButton
  locale={"es-ES"}
  {...etc}
/>`,
  },
  {
    title: "Theming",
    rainbowkit: `import { ...etc, darkTheme } from '@rainbow-me/rainbowkit';

<RainbowKitProvider 
  theme={darkTheme()} 
  {...etc}>
  {/* Your App */}
</RainbowKitProvider>`,
    thirdweb: `<ConnectButton
  theme="dark" // "light"
  {...etc}
/>`,
  },
];
