import { useRef, useState, type KeyboardEvent } from 'react';
import classNames from 'classnames';
import React from 'react';

function getPreviousIndex(current: number, elements: HTMLButtonElement[]) {
  for (let index = current - 1; index >= 0; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = elements.length - 1; index > -1; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}
const Content1 = () => (
  <div className=''>
    <img src="./0007 2.png" alt="Die cut pellets" />
  </div>
)
const Content2 = () => (
  <div>
  </div>
)
const Content3 = () => (
  <div>
  </div>
)
const Content4 = () => (
  <div>

  </div>
)
const Content5 = () => (
  <div>

  </div>
)

function getNextIndex(current: number, elements: HTMLButtonElement[]) {
  for (let index = current + 1; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = 0; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

interface Tab {
  label: string;
  content?: React.JSX.Element;
  disabled?: boolean;
}

const tabs: Tab[] = [
  {
    label: 'Die cut pellets',
    content: <Content1 />
  },
  {
    label: 'Laminated',
    content: <Content2 />
  },
  {
    label: 'Micropellets',
    content: <Content3 />
  },
  {
    label: 'Strip',
    content: <Content4 />
  },
  {
    label: 'Raw materials',
    content: <Content5 />
  },
];

export default function TabsBasic() {
  const tablistRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const isActive = (tab: Tab) => activeTab.label === tab.label;
  const tabId = (label: string) => `${label}-tab`;
  const panelId = (label: string) => `${label}-panel`;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const elements = Array.from(tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]') || []);
    const current = elements.findIndex((el) => event.currentTarget === el);
    const nextTab = getNextIndex(current, elements);
    const prevTab = getPreviousIndex(current, elements);
    const lastTab = elements.length - 1;

    const goTo = (index: number) => () => {
      event.stopPropagation();
      event.preventDefault();
      const goToElement = elements[index];
      goToElement.focus();
      goToElement.click();
      goToElement.scrollIntoView();
    };

    const interactionsMap = new Map([
      ['ArrowLeft', goTo(prevTab)],
      ['ArrowRight', goTo(nextTab)],
      ['Home', goTo(0)],
      ['End', goTo(lastTab)],
    ]);

    const interaction = interactionsMap.get(event.key);
    interaction?.();
  };

  return (
    <>
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Select tab"
        aria-orientation="horizontal"
        className=" tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={tabId(tab.label)}
            aria-controls={panelId(tab.label)}
            aria-selected={isActive(tab)}
            disabled={tab.disabled}
            tabIndex={isActive(tab) ? 0 : -1}
            onClick={() => setActiveTab(tab)}
            onKeyDown={handleKeyDown}
            className={classNames(
              'px-4 py-2 flex flex-col justify-center rounded-[2.313rem] ml-[1.25rem] mb-[30rem] border-2 border-white font-medium whitespace-nowrap text-neutral-500 hover:enabled:bg-primary-100 hover:enabled:text-primary-800 active:enabled:bg-primary-200 active:enabled:text-primary-900 disabled:text-disabled-500 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:shadow-[inset_0_0_0_4px_rgb(255,255,255)]',
              { 'bg-white text-main-color': isActive(tab) },
            )}
          >
            {tab.label}
          </button>
        ))}
        {tabs.map((tab) => (
        <div key={tab.label} role="tabpanel" id={panelId(tab.label)} aria-labelledby={tabId(tab.label)}>
          {isActive(tab) && tab.content}
        </div>
      ))}
      </div>

      
    </>
  );
}
