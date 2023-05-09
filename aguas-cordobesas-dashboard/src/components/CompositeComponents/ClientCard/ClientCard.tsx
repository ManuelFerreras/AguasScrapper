import React, { FC } from 'react'
import { Variant, VariantEnum } from '@/common/Types'

import Button from '@/components/BaseComponents/Button/Button'
import LegendLabel from '@/components/BaseComponents/LegendLabel/LegendLabel'

import styles from './ClientCard.module.css'

interface ClientCardProps {
  id: number
  name: string
  agId: number
  ultimaDeuda: string
  utlimoPeriodo: string
  vtoUltimoPeriodo: string
  variant: Variant
}

const ClientCard: FC<ClientCardProps> = ({
  id,
  name,
  agId,
  ultimaDeuda,
  utlimoPeriodo,
  vtoUltimoPeriodo,
  variant
}) => {
  return (
    <div className={`${styles.clientCard} ${styles[variant]}`}>
      <div className={`${styles.clientCardColumn}`}>
        <LegendLabel variant={VariantEnum.primary}>#</LegendLabel>
        <LegendLabel variant={VariantEnum.secondary}>
          {id.toString()}
        </LegendLabel>
      </div>

      <div className={`${styles.clientCardColumn}`}>
        <LegendLabel variant={VariantEnum.primary}>Name</LegendLabel>
        <LegendLabel variant={VariantEnum.secondary}>{name}</LegendLabel>
      </div>

      <div className={`${styles.clientCardColumn}`}>
        <LegendLabel variant={VariantEnum.primary}>AG ID</LegendLabel>
        <LegendLabel variant={VariantEnum.secondary}>
          {agId.toString()}
        </LegendLabel>
      </div>

      <div className={`${styles.clientCardColumn}`}>
        <LegendLabel variant={VariantEnum.primary}>Ultima Deuda</LegendLabel>
        <LegendLabel variant={VariantEnum.secondary}>{ultimaDeuda}</LegendLabel>
      </div>

      <div className={`${styles.clientCardColumn}`}>
        <LegendLabel variant={VariantEnum.primary}>Ultimo Periodo</LegendLabel>
        <LegendLabel variant={VariantEnum.secondary}>
          {utlimoPeriodo}
        </LegendLabel>
      </div>

      <div className={`${styles.clientCardColumn}`}>
        <LegendLabel variant={VariantEnum.primary}>
          Vto. Ultimo Periodo
        </LegendLabel>
        <LegendLabel variant={VariantEnum.secondary}>
          {vtoUltimoPeriodo}
        </LegendLabel>
      </div>

      <div className={`${styles.clientCardActionButtons}`}>
        <Button variant={VariantEnum.primary}>run</Button>
        <Button variant={VariantEnum.secondary}>delete</Button>
      </div>
    </div>
  )
}

export default ClientCard
export type { ClientCardProps }
