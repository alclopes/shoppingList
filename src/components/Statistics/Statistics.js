import LineChart from '../../shared/LineChart'
import { useSelector } from 'react-redux'
import { Wrapper } from './Statistics.styles'
import extractPercentage from '../../utils/extractPercentage'

import {
  selectSelectedProducts,
  selectSelectedProductTotalPrice,
} from '../../features/products/products.selectors'

const Statistics = () => {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const selectedProducts = useSelector(selectSelectedProducts)
  const totalPrice = useSelector(selectSelectedProductTotalPrice)
  return (
    <Wrapper>
      <div>
        estatísticas
        <LineChart
          color={colors[0]}
          title='saudável'
          percentage={extractPercentage(
            selectedProducts.length,
            selectedProducts.filter((product) =>
              product.tags.includes('healthy')
            ).length
          )}
        />
        <LineChart
          color={colors[1]}
          title='nao tao saudável'
          percentage={extractPercentage(
            selectedProducts.length,
            selectedProducts.filter((product) => product.tags.includes('junk'))
              .length
          )}
        />
        <LineChart
          color={colors[2]}
          title='limpeza'
          percentage={extractPercentage(
            selectedProducts.length,
            selectedProducts.filter((product) =>
              product.tags.includes('cleaning')
            ).length
          )}
        />
        <LineChart
          color={colors[3]}
          title='outros'
          percentage={extractPercentage(
            selectedProducts.length,
            selectedProducts.filter((product) =>
              product.tags.includes('others')
            ).length
          )}
        />
        <LineChart
          color={colors[2]}
          title='hygiene'
          percentage={extractPercentage(
            selectedProducts.length,
            selectedProducts.filter((product) =>
              product.tags.includes('hygiene')
            ).length
          )}
        />
        <div style={{ marginTop: 12 }}>
          <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
            previsão de gastos:
          </h2>
          <div style={{ fontSize: 24 }}>
            {totalPrice.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Statistics
