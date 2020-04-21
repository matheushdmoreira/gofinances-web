import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const formatDate = (date: Date): string => {
  return format(date, "d'/'mm'/'yyyy", { locale: pt });
};

export default formatDate;
