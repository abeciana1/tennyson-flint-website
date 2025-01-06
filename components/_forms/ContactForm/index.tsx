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
import axios from 'axios'

const ContactForm:React.FC<ContactFormI> = ({
  heading,
  textBody,
  bgColor,
  textColor
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      textBody: ''
    }
  })
  console.log('form errors', errors)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const contactRes = await axios.post('/api/contact', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (contactRes.status === 200) reset()
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
            textColor={textColor}
            errors={errors}
          />
          <ShortTextField
            name='lastName'
            type={FIELD_TYPE.TEXT}
            label='Last name'
            required
            register={register}
            textColor={textColor}
            errors={errors}
          />
        </FieldSet>
        <FieldSet>
          <ShortTextField
            name='email'
            type={FIELD_TYPE.EMAIL}
            label='Email Address'
            required
            register={register}
            textColor={textColor}
            errors={errors}
          />
        </FieldSet>
        <FieldSet>
          <TextArea
            name='textBody'
            label='Text Body'
            required
            register={register}
            textColor={textColor}
            errors={errors}
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