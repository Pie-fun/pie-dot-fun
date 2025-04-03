import { Checkbox } from '@/components/Checkbox/Checkbox'
import * as styles from '@/components/CheckboxWithLabel/CheckboxWithLabel.css'
import * as labelStyles from '@/components/Label/Label.css'
import { Label } from '@/components/Label/Label'
import { ComponentProps, PropsWithChildren, useId } from 'react'

type CheckboxWithLabelProps = Omit<
  ComponentProps<typeof Checkbox> &
    PropsWithChildren &
    styles.CheckboxWithLabelVariants &
    labelStyles.LabelVariants,
  'ref'
>

export function CheckboxWithLabel({
  children,
  disabled,
  layout,
  id,
  ...props
}: Readonly<CheckboxWithLabelProps>) {
  const uniqueId = useId()

  return (
    <div className={styles.checkboxWithLabel({ layout, disabled })}>
      <div className={styles.checkbox()}>
        <Checkbox id={`${id || uniqueId}`} disabled={disabled} {...props} />
      </div>
      <Label htmlFor={`${id || uniqueId}`} layout={layout} disabled={disabled}>
        {children}
      </Label>
    </div>
  )
}
