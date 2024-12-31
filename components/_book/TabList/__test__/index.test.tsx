import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TabList from '@/components/_book/TabList'

describe('TabList', () => {
  beforeEach(() => {
    render(
      <TabList
        tabList={[
          {
            tabName: 'Tab1',
            blocks: [
              {
                "@type": "@builder.io/sdk:Element",
                "@version": 2,
                "id": "builder-9e145380922346a3ad3e63a344c55450",
                "component": {
                    "name": "Text",
                    "options": {
                        "text": "<p>Sed ut <strong>perspiciatis</strong> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo&nbsp; voluptatem quia voluptas.Neque porro quisq<em><u>uam est, sed quia non numquam eius modi tempora incidunt ut labore</u></em> et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</p>"
                    }
                },
                "responsiveStyles": {
                  "large": {
                      "display": "flex",
                      "flexDirection": "column",
                      "position": "relative",
                      "flexShrink": "0",
                      "boxSizing": "border-box",
                      "marginTop": "20px",
                      "lineHeight": "normal",
                      "height": "auto"
                  }
                }
              }
            ]
          }
        ]}
      />
    )
  })
  test('should render a button with with tab name', () => {
    const button = screen.getByRole('tab', { name: /tab1/i })
    expect(button).toBeInTheDocument()
  })
})