import { X, SlidersHorizontal } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface CatalogFiltersProps {
  lang: string;
  categories: { id: string; labelEn: string; labelBn: string }[];
  filter: string;
  setFilter: (id: string) => void;
  selectedFeatures: string[];
  toggleFeature: (f: string) => void;
  allFeatures: string[];
  onReset: () => void;
  open: boolean;
  setOpen: (o: boolean) => void;
  variant?: 'sticky' | 'sidebar';
}

const CatalogFilters = ({
  lang, categories, filter, setFilter,
  selectedFeatures, toggleFeature, allFeatures,
  onReset, open, setOpen, variant = 'sidebar',
}: CatalogFiltersProps) => {
  const hasFilters = filter !== 'all' || selectedFeatures.length > 0;

  // Sticky variant: only show mobile toggle + category chips inline
  if (variant === 'sticky') {
    return (
      <div className="flex gap-2 flex-wrap">
        {categories.map(c => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === c.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-secondary text-foreground hover:bg-accent/20'
            }`}
          >
            {lang === 'en' ? c.labelEn : c.labelBn}
          </button>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Mobile toggle */}
      <Button
        variant="outline"
        size="sm"
        className="md:hidden flex items-center gap-2 rounded-full"
        onClick={() => setOpen(!open)}
      >
        <SlidersHorizontal className="h-4 w-4" />
        {lang === 'en' ? 'Filters' : 'ফিল্টার'}
        {hasFilters && (
          <span className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded-full">
            {(filter !== 'all' ? 1 : 0) + selectedFeatures.length}
          </span>
        )}
      </Button>

      {/* Filter panel */}
      <div className={`
        ${open ? 'block' : 'hidden'} md:block
        w-full md:w-64 shrink-0 space-y-6
      `}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-accent" />
            {lang === 'en' ? 'Filters' : 'ফিল্টার'}
          </h3>
          {hasFilters && (
            <button onClick={onReset} className="text-xs text-accent hover:underline">
              {lang === 'en' ? 'Clear all' : 'সব মুছুন'}
            </button>
          )}
        </div>

        {/* Category */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            {lang === 'en' ? 'Category' : 'ক্যাটাগরি'}
          </h4>
          <div className="space-y-1.5">
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  filter === c.id
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'hover:bg-secondary text-foreground/80'
                }`}
              >
                {lang === 'en' ? c.labelEn : c.labelBn}
              </button>
            ))}
          </div>
        </div>

        {/* Customization Options */}
        {allFeatures.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {lang === 'en' ? 'Customization' : 'কাস্টমাইজেশন'}
            </h4>
            <div className="space-y-2">
              {allFeatures.map(f => (
                <label key={f} className="flex items-center gap-2.5 cursor-pointer group">
                  <Checkbox
                    checked={selectedFeatures.includes(f)}
                    onCheckedChange={() => toggleFeature(f)}
                  />
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    {f}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Active filter badges */}
        {hasFilters && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
            {filter !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full">
                {categories.find(c => c.id === filter)?.[lang === 'en' ? 'labelEn' : 'labelBn']}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setFilter('all')} />
              </span>
            )}
            {selectedFeatures.map(f => (
              <span key={f} className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs px-2.5 py-1 rounded-full">
                {f}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleFeature(f)} />
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CatalogFilters;
