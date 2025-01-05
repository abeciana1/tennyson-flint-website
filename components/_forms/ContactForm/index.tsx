import FieldSet from '@/components/_form-fields/FieldSet'
import ShortTextField from '@/components/_form-fields/ShortTextField'
import { ContactFormI } from '@/definitions/interfaces/_sections'
import FormContainer from '@/components/_sections/FormContainer'
import {
  FIELD_TYPE,
  ROUNDED,
  COLORS
} from '@/definitions/enums'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import TextArea from '@/components/_form-fields/TextArea'
import { SubmitButton } from '@/components/_styled/buttons'
import MarginSection from '@/components/_sections/MarginSection'

const ContactForm:React.FC<ContactFormI> = ({
  heading,
  textBody,
  bgColor,
  textColor
}) => {
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      textBody: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  return (
    <MarginSection>
      <FormContainer
        heading={heading}
        textBody={textBody}
        bgColor={bgColor}
        textColor={textColor}
      >
        <FieldSet>
          <ShortTextField
            name='firstName'
            type={FIELD_TYPE.TEXT}
            label='First name'
            required
            register={register}
          />
          <ShortTextField
            name='lastName'
            type={FIELD_TYPE.TEXT}
            label='Last name'
            required
            register={register}
          />
        </FieldSet>
        <FieldSet>
          <ShortTextField
            name='email'
            type={FIELD_TYPE.TEXT}
            label='Email Address'
            required
            register={register}
          />
        </FieldSet>
        <FieldSet>
          <TextArea
            name='textBody'
            label='Text Body'
            required
            register={register}
          />
        </FieldSet>
        <FieldSet>
          <SubmitButton
            text='Submit'
            bgColor={COLORS.RED}
            textColor={COLORS.WHITE}
            rounded={ROUNDED.MD}
            clickHandler={handleSubmit(onSubmit)}
          />
        </FieldSet>
      </FormContainer>
    </MarginSection>
  )
}

export default ContactForm