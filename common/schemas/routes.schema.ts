import * as yup from 'yup'

export const ICreateRouteDetailsSchema = yup.object({
  startLocation: yup
    .string()
    .matches(
      /^[a-zA-Z0-9àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ,-\s]*$/,
      'Không được chứa ký tự đặc biệt'
    )
    .required('Vui lòng điền địa điểm bắt đầu'),
  endLocation: yup
    .string()
    .matches(
      /^[a-zA-Z0-9àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ,-\s]*$/,
      'Không được chứa ký tự đặc biệt'
    )
    .required('Vui lòng điền địa điểm kết thúc'),
  distanceKm: yup.number().positive().required('Vui lòng điền khoảng cách'),
  durationHours: yup.number().positive().required('Vui lòng điền thời gian'),
  routeStops: yup
    .array()
    .of(
      yup.object({
        location: yup
          .string()
          .matches(
            /^[a-zA-Z0-9àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ,-\s]*$/,
            'Không được chứa ký tự đặc biệt'
          )
          .required('Vui lòng điền địa điểm trung gian'),
        distanceFromStartKm: yup
          .number()
          .integer()
          .moreThan(-1)
          .required('Vui lòng điền khoảng cách từ điểm xuất phát'),
        arrivalTime: yup.string().required('Vui lòng điền thời gian trung gian')
      })
    )
    .required()
})
