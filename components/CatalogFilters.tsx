import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { SortType } from '@/hooks/useSortedProducts';

interface CatalogFiltersProps {
  sort: string;
  onSortChange: (value: SortType) => void;
}

export const CatalogFilters = ({ sort, onSortChange }: CatalogFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
      <Select value={sort} onValueChange={onSortChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Сортировка" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="default">Без сортировки</SelectItem>
          <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
          <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
          <SelectItem value="alpha">По алфавиту</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
