import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TabGroup from '@/components/_book/TabGroup'

describe('TabGroup', () => {
  beforeEach(() => {
    render(
      <TabGroup
        tabs={[
          {
            "_uid": "004e9065-79c2-4f2e-9736-25777d02a144",
            "label": "Synopsis",
            "blocks": [
              {
                "_uid": "06cf8791-06e9-4a03-836c-9ea305339282",
                "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo  voluptatem quia voluptas.Neque porro quisquam est, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
                "component": "markdown_text"
              }
            ]
          }
        ]}
      />
    )
  })
  test('should render a button with with tab name', () => {
    const button = screen.getByRole('tab', { name: /Synopsis/i })
    expect(button).toBeInTheDocument()
  })
})